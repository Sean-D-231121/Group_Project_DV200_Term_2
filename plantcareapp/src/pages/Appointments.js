import "./Appointments.css";
import "./Global.css";
import NavBar from "../Components/NavBar";
import AppointmentItem from "../Components/AppointmentItem";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [plants, setPlants] = useState([]);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [currentPlant, setCurrentPlant] = useState([]);
  const [currentFilteredPlant, setCurrentFilteredPlant] = useState([]);
  const currentUserID = 1;
  const macPort = "3001";
  const winPort = "5000";

  useEffect(() => {
    axios
      .get(`http://localhost:${macPort}/api/appointments`)
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
    axios
      .get(`http://localhost:${macPort}/api/plants`)
      .then((response) => {
        setCurrentPlant(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the plants!", error);
      });
  }, [macPort]);

  const handleCreateAppointment = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:${macPort}/api/appointments/create`,
        {
          username,
          plants,
          date,
          reason,
        }
      );

      if (response.status === 201) {
        setMessage("Created appointment");
      } else {
        setMessage("Error creating appointment");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.error || "Error creating appointment";
      setMessage(errorMsg);
    }
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
            {appointments.map((appObj) => (
              <AppointmentItem
                key={appObj.appointmentId} // Ensure unique key for each element
                PlantName={appObj.plants}
                AppointmentDate={appObj.date}
              />
            ))}
          </div>
          <p style={{ marginTop: "20px", marginBottom: "0px" }}>View all</p>
        </div>

        <div className="aptCreateAppointmentFrame">
          <h4>Create Appointments</h4>
          <div className="aptCreateAppCont">
            {/* Form Appointment */}
            <form onSubmit={handleCreateAppointment} className="aptForm">
              {/* Select plant photo */}
              <div className="form-group" style={{ marginBottom: "30px" }}>
                <p>Photo of the plant</p>
                <div className="aptCreateAppPlantDetailsPhoto"></div>
              </div>

              {/* Choose plant dropdown */}
              <div className="form-group" style={{ marginBottom: "30px" }}>
                <p>Choose plant</p>
                <select
                  multiple
                  className="form-control aptCreateAppSelplantDate"
                  id="exampleFormControlSelect2"
                  value={plants}
                  onChange={(e) =>
                    setPlants(
                      [...e.target.selectedOptions].map(
                        (option) => option.value
                      )
                    )
                  }
                >
                  {currentFilteredPlant.map((filteredPlant, index) => (
                    <option key={index}>{filteredPlant.plantName}</option>
                  ))}
                </select>
              </div>

              {/* Input plant appointment reason */}
              <div className="form-group" style={{ marginBottom: "30px" }}>
                <p>Appointment reason</p>
                <input
                  type="text"
                  className="aptCreateAppDateSelectsDate"
                  name="plantName"
                  placeholder="Enter the reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              {/* Input appointment date */}
              <div className="form-group" style={{ marginBottom: "50px" }}>
                <p>Choose date for appointment</p>
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
