import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";
import "./Global.css";
import UserPhoto from "../Userphoto.png";
import MySideNav from "../Components/NavBar";
;
const Home = () => {
 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="profile-container">
      <MySideNav />
      <div className="webpage-frame">
        <header>
          <h1>Profile</h1>
          <br />
          <img
            src={UserPhoto}
            alt="User"
            className="user-photo"
            style={{ marginRight: "-40px", width: "12%" }}
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
            marginLeft: "38%",
            marginTop: "3%",
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
            marginTop: "10px",
          }}
        >
          <button className="appointment-button">
            <Link
              to="/appointments"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Monstera - Monday 16/5
            </Link>
          </button>
          <button className="appointment-button">
            <Link
              to="/appointments"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Orchid - Friday 20/5
            </Link>
          </button>
          <button className="appointment-button">
            <Link
              to="/appointments"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Begonia - Wednesday 3/6
            </Link>
          </button>
          <button className="appointment-button">
            <Link
              to="/appointments"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Fern - Saturday 14/6
            </Link>
          </button>
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
