import "./Splash.css";
import Logo from "./Logo.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signin",
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        // Store user details in session storage
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        sessionStorage.setItem("userName", JSON.stringify(response.data));
        navigate("/Home");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <Link to="../">
        <h1 className="arrow">⇦</h1>
      </Link>
      <h1 className="signuph1">Welcome Back!</h1>
      <img className="signimage2" src={Logo} alt="" width={100} />
      <div className="signupblock2">
        <form onSubmit={handleSignIn}>
          <h1 className="signh1">Sign In</h1>
          <div className="signupdiv1">
            <p className="signuptext">Username</p>
            <input
              className="signupinput"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="signupdiv1">
            <p className="signuptext">Password</p>
            <input
              className="signupinput"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="signupbutton">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
