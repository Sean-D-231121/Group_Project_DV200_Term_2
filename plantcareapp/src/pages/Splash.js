// Splash.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import "./Splash.css";

const Splash = () => {
  const [roleChosen, setRoleChosen] = useState(false);
  const [role, setRole] = useState("None");
 const getRole = (roleChoose) => () => {
   if (role === "None") {
     setRole(roleChoose);
     setRoleChosen(true);
     sessionStorage.setItem("role", roleChoose); // Store role in sessionStorage
   } else {
     setRole("None");
     setRoleChosen(false);
     sessionStorage.removeItem("role"); // Remove role from sessionStorage
   }
 };

  return (
    <div className="container">
      <div className="content">
        <img src={Logo} alt="" width={250} />
        <h1 className="splashh1">Botania</h1>
        {roleChosen ? (
          <>
            <Link to="./SignUp">
              <button className="CustomerButton">Sign up</button>
            </Link>
            <Link to="./SignIn">
              <button className="EmployeeButton">Sign in</button>
            </Link>
          </>
        ) : (
          <>
            <button className="CustomerButton" onClick={getRole("Customer")}>
              Customer
            </button>
            <button className="EmployeeButton" onClick={getRole("Employee")}>
              Employee
            </button>
            <button className="EmployeeButton" onClick={getRole("Admin")}>
              Admin
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Splash;
