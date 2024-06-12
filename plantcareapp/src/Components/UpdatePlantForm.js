import "../pages/PlantLibrary.css";
import { useState } from "react";
import axios from "axios";

const UpdatePlantForm = ({ plantId, onClose, onUpdate }) => {
  const [plantName, setPlantName] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [message, setMessage] = useState("");
  const PORT = "5000";

  const handleUpdatePlant = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:${PORT}/api/plants/update/${plantId}`,
        {
          plantName,
          plantDescription,
        }
      );
      if (response.status === 200) {
        setMessage("Plant updated successfully!");
        onUpdate(); // Refresh the plant list
        onClose();
      } else {
        setMessage("Error updating plant!");
      }
    } catch (error) {
      setMessage("Error updating plant!");
      console.error(error);
    }
  };

  return (
    <div className="plUpdateBody">
      <h6>
        <strong>Update your plant details:</strong>
      </h6>
      <form onSubmit={handleUpdatePlant} className="plUpdateForm">
        <div className="form-group" style={{ marginBottom: "30px" }}>
          <p>Plant name:</p>
          <input
            type="text"
            className="plUpdatePlantTextField"
            name="plantName"
            placeholder="New plant name..."
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p>Plant description:</p>
          <textarea
            className="plUpdatePlantTextField"
            rows="3"
            placeholder="New description for the plant..."
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
          Submit
        </button>
        <button type="button" className="plAddPlantButton" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default UpdatePlantForm;
