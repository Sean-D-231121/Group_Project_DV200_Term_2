import "./Appointments.css";
import "./Global.css";
import NavBar from "../Components/NavBar";
import AppointmentItem from "../Components/AppointmentItem";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const currentUserID = 1;

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/appointments")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
  });

  // useEffect(() => {
  //   // Fetch products from the API
  //   axios
  //     .get("http://localhost:3001/api/products")
  //     .then((response) => {
  //       setProducts(response.data);
  //       setFilteredProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the products!", error);
  //     });
  // }, []);

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
            <form action="" className="aptForm">
              {/* Select plant photo */}
              <div className="form-group" style={{ marginBottom: "30px" }}>
                <p>Photo of the plant</p>
                <div className="aptCreateAppPlantDetailsPhoto"></div>
              </div>

              {/* Input plant name */}
              <div className="form-group" style={{ marginBottom: "30px" }}>
                <p>Plant name</p>
                <input
                  type="text"
                  className="aptCreateAppDateSelectsDate"
                  name="plantName"
                  placeholder="Enter your name"
                />
              </div>

              {/* Input appointment date */}
              <div className="form-group" style={{ marginBottom: "50px" }}>
                <p>Choose date for appointment</p>
                <input
                  type="date"
                  className="aptCreateAppDateSelectsDate"
                  name="appointmentDate"
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
