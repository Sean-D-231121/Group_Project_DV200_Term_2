import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "./Home.css";
import "./Global.css";
import UserPhoto from "../Userphoto.png";
import MySideNav from "../Components/NavBar";

const Home = () => {
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(UserPhoto);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setProfilePhoto(parsedUser.profilePhoto || UserPhoto);
    }

    axios
      .get("http://localhost:3001/api/appointments")  // Adjust the port as needed
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
  }, []);

  return (
    <div className="profile-container">
      <MySideNav />
      <div className="webpage-frame">
        <header>
          <h1>Profile</h1>
          <br />
          <img
            src={profilePhoto}
            alt="User"
            className="user-photo"
            style={{ width: "12%" }}
          />
          <br />
          <h2>{user && user.name}</h2>
          <p style={{ marginTop: "-15px" }}>{user && user.email}</p>
        </header>
        <div
          className="card"
          style={{
            width: "356px",
            height: "215px",
            backgroundColor: "#DFFEDE",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5%",
            margin: "3% auto",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h6 style={{ fontWeight: "bold" }}>Personal Information</h6>
            <p style={{ textAlign: "center", fontSize: "12px" }}>
              Name: <br />
              {user && user.name} <br />
              <br />
              Username: <br />
              {user && user.username} <br />
              <br />
              Email: <br />
              {user && user.email}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button className="update-button">
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Update Information
            </Link>
          </button>
        </div>
        <br />
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Current Appointments
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <button
                key={appointment.appointmentId}
                className="appointment-button"
              >
                <Link
                  to="/appointments"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {appointment.plants} - {new Date(appointment.date).toLocaleDateString()}
                </Link>
              </button>
            ))
          ) : (
            <p>No current appointments.</p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <Link to="/appointments" style={{ color: "inherit" }}>
              See More
            </Link>
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
