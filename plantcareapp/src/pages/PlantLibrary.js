import "./PlantLibrary.css";
import "./Global.css";
import NavBar from "../Components/NavBar";
import PlantLibraryObject from "../Components/PlantLibraryObject";
import { useState, useEffect } from "react";
import axios from "axios";
import AddPlantForm from "../Components/AddPlantForm";

const PlantLibrary = () => {
  const [plants, setPlants] = useState([]);
  const [plantsEmpty, setPlantsEmpty] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const sessionUser = sessionStorage.getItem("user");
  const [userID, setUserID] = useState("");
  const PORT = "5000";

  useEffect(() => {
    if (sessionUser) {
      const currentUser = JSON.parse(sessionUser);
      setUserID(currentUser._id);
      fetchPlants(currentUser._id);
    }
  }, [sessionUser]);

  const fetchPlants = (userID) => {
    axios
      .get(`http://localhost:${PORT}/api/plants/user/${userID}`)
      .then((response) => {
        setPlants(response.data);
        setPlantsEmpty(false);
      })
      .catch((error) => {
        setPlantsEmpty(true);
        console.error("There is no plants!", error);
      });
  };

  const handleAddPlant = () => {
    fetchPlants(userID);
    setShowForm(false);
  };

  const handleUpdatePlant = () => {
    fetchPlants(userID);
  };

  const handleDeletePlant = () => {
    fetchPlants(userID);
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h2 style={{ marginTop: "40px", marginBottom: "40px" }}>
          Plants Library
        </h2>
        <div className="plLibrarySpace">
          <button className="plLibraryAddPlantBTN" onClick={toggleForm}>
            {showForm ? "Close form" : "Add plant"}
          </button>
          <div className="plLibraryContainer">
            {showForm && (
              <AddPlantForm onSubmit={handleAddPlant} onClose={toggleForm} />
            )}
          </div>
          <div className="plLibraryContainer">
            {plants.length > 0 && !plantsEmpty ? (
              plants.map((plantObject) => (
                <PlantLibraryObject
                  key={plantObject._id}
                  PlantID={plantObject._id}
                  PlantName={plantObject.plantName}
                  PlantDescription={plantObject.plantDescription}
                  PlantImage={plantObject.plantImage}
                  onDelete={handleDeletePlant}
                  onUpdate={handleUpdatePlant}
                />
              ))
            ) : plantsEmpty ? (
              <p>You have no plants, add a plant.</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantLibrary;
