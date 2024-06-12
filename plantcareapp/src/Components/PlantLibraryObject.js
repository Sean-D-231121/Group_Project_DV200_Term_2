import "../pages/PlantLibrary.css";
import { useState } from "react";
import axios from "axios";
import UpdatePlantForm from "./UpdatePlantForm";

const PlantLibraryObject = ({
  PlantID,
  PlantName,
  PlantDescription,
  PlantImage,
  onDelete,
  onUpdate,
}) => {
  const PORT = "5000";
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const toggleUpdateForm = () => {
    setIsUpdateFormVisible(!isUpdateFormVisible);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:${PORT}/api/plants/delete/${PlantID}`
      );
      onDelete();
    } catch (error) {
      console.error("Error deleting plant", error);
    }
  };

  return (
    <div className="plObjectMain">
      <button className="plObjectCloseBTN" onClick={handleDelete}>
        Delete
      </button>
      <div
        className="plObjectImage"
        style={{
          backgroundImage: `url(http://localhost:${PORT}/PlantImages/${PlantImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <h6>{PlantName}</h6>
      <p>{PlantDescription}</p>
      <button className="plObjectViewPlantHisBTN" onClick={toggleUpdateForm}>
        {isUpdateFormVisible ? "Close form" : "Update details"}
      </button>
      {isUpdateFormVisible && (
        <div className="updatePlantContainer">
          <UpdatePlantForm
            plantId={PlantID}
            onClose={toggleUpdateForm}
            onUpdate={onUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default PlantLibraryObject;
