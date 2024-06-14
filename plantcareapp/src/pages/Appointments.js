import "./Appointments.css";
import "./Global.css";
import NavBar from "../Components/NavBar";
import AppointmentItem from "../Components/AppointmentItem";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NoAppointments = () => {
  return (
    <div>
      <p>You have no appointments!</p>
    </div>
  );
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentEmpty, setAppointmentEmpty] = useState(true);
  const [message, setMessage] = useState("");
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [plants, setPlants] = useState([]);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [selectedPlants, setSelectedPlants] = useState([]);

  // Please change it to the corrosponding port
  const PORT = 5000;
  const sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (sessionUser) {
      const currentUser = JSON.parse(sessionUser);
      setUserID(currentUser._id); // Update userID using setUserID
      console.log("CURRENT USER LOADED!");
      console.log("username = " + currentUser.username);
      console.log("userid = " + currentUser._id);
      if (!currentUser.username) {
        setUsername("null");
      } else {
        setUsername(currentUser.username);
      }
      fetchAppointments();
      fetchPlants();
    } else {
      console.log("NO CURRENT USER, OBJECTS WONT LOAD & CREATE");
    }
  }, [userID]);

  useEffect(() => {}, [userID]);

  const fetchAppointmentsWOfiltering = () => {
    axios
      .get(`http://localhost:${PORT}/api/appointments`)
      .then((response) => {
        setAppointments(response.data);
        console.log(
          "Connection to appointments database:\n success\n Type: GET"
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
  };

  const fetchAppointments = () => {
    axios
      .get(`http://localhost:${PORT}/api/appointments/user/${userID}`)
      .then((response) => {
        setAppointments(response.data);
        setAppointmentEmpty(false);
        console.log(
          "Connection to appointments database:\n success\n Type: GET FILTERED"
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There is no appointments!", error);
        setAppointmentEmpty(true);
      });
  };

  const fetchPlantsWOfiltering = () => {
    axios
      .get(`http://localhost:${PORT}/api/plants`)
      .then((response) => {
        setPlants(response.data);
        console.log("Connection to plants database:\n success");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
  };

  const fetchPlants = () => {
    axios
      .get(`http://localhost:${PORT}/api/plants/user/${userID}`)
      .then((response) => {
        setPlants(response.data);
        console.log(
          "Connection to appointments database:\n success\n Type: GET FILTERED"
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
  };

  useEffect(() => {
    console.log("Current appointments: ", appointments);
    console.log("Current plants: ", plants);
    console.log(
      "Current user credentials: \n USERNAME: " +
        username +
        " \n USER_ID: " +
        userID
    );
  }, [userID]);

  const handleCreateAppointment = async (event) => {
    event.preventDefault();
    try {
      console.log("User ID:", userID);
      console.log("Username:", username);
      console.log("Selected Plants:", selectedPlants);
      console.log("Date:", date);
      console.log("Reason:", reason);

      const response = await axios.post(
        `http://localhost:${PORT}/api/appointments/create`,
        {
          userID,
          username,
          plants: selectedPlants, // Use the selected plant objects
          date,
          reason,
        }
      );

      if (response.status === 201) {
        setMessage("Created appointment");

        console.log(
          "Connection to appointments database:\n success\n Type: POST"
        );
        fetchAppointments();
      } else {
        setMessage("Error creating appointment");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.error || "Error creating appointment";
      setMessage(errorMsg);
    }
  };

  const handleDeleteAppointment = (id) => {
    fetchAppointments();
  };

  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h2 style={{ marginTop: "50px", marginBottom: "50px" }}>
          Appointments
        </h2>
        <h5 style={{ marginTop: "0px", marginBottom: "30px" }}>
          Current Appointments
        </h5>

        <div className="aptAppointmentContainer">
          <div className="aptAppointmentContainerAppointments">
            {/* This part must be reloaded again after deletion */}
            {appointments.length > 0 && !appointmentEmpty ? (
              appointments.map((appObj) => (
                <AppointmentItem
                  key={appObj.appointmentId}
                  id={appObj._id}
                  plants={appObj.plants}
                  Reason={appObj.reason}
                  AppointmentDate={appObj.date}
                  onDelete={handleDeleteAppointment}
                />
              ))
            ) : appointmentEmpty ? (
              <p style={{ color: "#ababab" }}>You have no appointments!</p>
            ) : null}
          </div>
        </div>

        <div className="aptCreateAppointmentFrame">
          <h4>Create Appointments</h4>
          <div className="aptCreateAppCont">
            {/* Form Appointment */}
            <form onSubmit={handleCreateAppointment} className="aptForm">
              {/* Choose plant dropdown */}
              <div className="form-group" style={{ marginBottom: "30px" }}>
                <p>Choose plant:</p>
                {plants && plants.length > 0 ? (
                  <div>
                    <p
                      style={{
                        width: "300px",
                        fontFamily: "Red Hat Display, sans-serif",
                        margin: "0 auto",
                        marginBottom: "20px",
                      }}
                    >
                      To select multiple: Group: Hold shift and click. Different
                      pairs: Hold ctrl/cmd and click
                    </p>
                    <select
                      multiple
                      className="form-control aptCreateAppSelplantDate"
                      id="exampleFormControlSelect2"
                      value={selectedPlants.map((plant) => plant._id)} // Use selected plant IDs
                      onChange={(e) => {
                        const selectedIds = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setSelectedPlants(
                          plants.filter((plant) =>
                            selectedIds.includes(plant._id)
                          )
                        );
                      }}
                    >
                      {plants.map((plantObject) => (
                        <option key={plantObject._id} value={plantObject._id}>
                          {plantObject.plantName}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="aptNoPlantsSelect">
                    <p style={{ marginBottom: "5px" }}>You have no plants!</p>
                    <Link
                      to="/PlantLibrary"
                      style={{
                        fontFamily: "Red Hat Display, sans-serif",
                        fontWeight: "600",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      Go to your Plantslibrary
                    </Link>
                  </div>
                )}
              </div>

              {/* Input plant appointment reason */}
              <div class="form-group">
                <p>Appointment reason:</p>
                <textarea
                  className="aptCreateAppDateSelectsDate"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter the reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  style={{ marginBottom: "20px" }}
                ></textarea>
              </div>

              {/* Input appointment date */}
              <div className="form-group" style={{ marginBottom: "50px" }}>
                <p>Choose date for appointment:</p>
                <input
                  type="date"
                  className="aptCreateAppDateSelectsDate"
                  name="appointmentDate"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="aptCreateAppDateButton">
                Create Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
