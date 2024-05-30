import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Settings.css";
import "./Global.css";
import UserPhoto from "../Userphoto.png";
import MySideNav from "../Components/NavBar";

const Settings = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(UserPhoto);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setProfilePhoto(parsedUser.profilePhoto || UserPhoto);
    }
  }, []);

  const clearInputs = () => {
    setName("");
    setUsername("");
    setOldPassword("");
    setNewPassword("");
    setEmail("");
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: name || user.name,
      username: username || user.username,
      email: email || user.email,
      profilePhoto: profilePhoto,
    };
    setUser(updatedUser);
    sessionStorage.setItem("user", JSON.stringify(updatedUser));

    clearInputs();
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <MySideNav />
      <div className="webpage-frame">
        <div className="settings-container">
          <h2>Settings</h2>
          <br />
          <br />
          <br />
          <h5>Update Profile Photo:</h5>
          <img src={profilePhoto} alt="User" className="user-photo" />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept="image/*"
          />
          <svg
            className="edit-icon"
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleFileInputClick}
            style={{ cursor: "pointer" }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M21.707,5.893l-3.6-3.6a1,1,0,0,0-1.414,0l-12.6,12.6a.988.988,0,0,0-.241.391l-1.8,5.4A1,1,0,0,0,3,22a1.014,1.014,0,0,0,.316-.051l5.4-1.8a.991.991,0,0,0,.39-.242l12.6-12.6A1,1,0,0,0,21.707,5.893ZM7.86,18.326,4.581,19.419,5.674,16.14,17.4,4.414,19.586,6.6Z"></path>
            </g>
          </svg>

          <div className="profile-info">
            <br />
            <h5>Name:</h5>
            <p>{user && user.name}</p>
            <div className="text-box-container">
              <input
                type="text"
                placeholder="Update Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <h5>Username:</h5>
            <p>{user && user.username}</p>
            <div className="text-box-container">
              <input
                type="text"
                placeholder="Update Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br />
            <h5>Email:</h5>
            <p>{user && user.email}</p>
            <div className="text-box-container">
              <input
                type="text"
                placeholder="Update Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <h5>Update Password:</h5>
            <div className="text-box-container">
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="text-box-container">
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <br />
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
