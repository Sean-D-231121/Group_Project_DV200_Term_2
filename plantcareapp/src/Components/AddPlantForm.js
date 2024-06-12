import "../pages/PlantLibrary.css";
import { useState, useEffect } from "react";
import axios from "axios";

const AddPlantForm = ({ onSubmit, onClose }) => {
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [plantName, setPlantName] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [plantImage, setPlantImage] = useState(null);
  const [message, setMessage] = useState("");

  const PORT = "5000";

  const sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (sessionUser) {
      const currentUser = JSON.parse(sessionUser);
      setUserID(currentUser._id);
      setUsername(currentUser.username);
    }
  }, [sessionUser]);

  const handleAddPlant = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("userID", userID);
    formData.append("username", username);
    formData.append("plantName", plantName);
    formData.append("plantDescription", plantDescription);
    if (plantImage) {
      formData.append("plantImage", plantImage);
    }

    try {
      const response = await axios.post(
        `http://localhost:${PORT}/api/plants/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
          <p>Plant photo:</p>
          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              style={{ width: "300px", fontSize: "14px" }}
              onChange={(e) => setPlantImage(e.target.files[0])}
            />
          </div>
        </div>
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
