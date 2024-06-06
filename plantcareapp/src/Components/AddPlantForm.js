import "../pages/PlantLibrary.css";
import { useState, useEffect } from "react";
import axios from "axios";

const AddPlantForm = ({ onSubmit, onClose }) => {
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [plantName, setPlantName] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [message, setMessage] = useState("");

  const sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (sessionUser) {
      const currentUser = JSON.parse(sessionUser);
      setUserID(currentUser._id);
      setUsername(currentUser.username);
    }
  }, []);

  const handleAddPlant = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/api/plants/add`,
        {
          userID,
          username,
          plantName,
          plantDescription,
        }
      );

      if (response.status === 201) {
        setMessage("Added a plant to your library");
        onSubmit();
      } else {
        setMessage("Error creating plant object");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.error || "Error creating plant object";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="plForm">
      <h3>Add a plant</h3>
      <form onSubmit={handleAddPlant} className="plFormBody">
        <div className="form-group" style={{ marginBottom: "30px" }}>
          <p>Plant name:</p>
          <input
            type="text"
            className="plAddPlantTextfield"
            name="plantName"
            placeholder="Type in your plant name..."
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p>Plant description:</p>
          <textarea
            className="plAddPlantTextfield"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter the description for the plant..."
            value={plantDescription}
            onChange={(e) => setPlantDescription(e.target.value)}
            style={{ marginBottom: "20px" }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="plAddPlantButton"
          style={{ marginRight: "10px" }}
        >
          Add Plant
        </button>
        <button type="button" className="plAddPlantButton" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default AddPlantForm;
