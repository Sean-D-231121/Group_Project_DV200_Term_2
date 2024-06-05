import "./PlantLibrary.css";
import "./Global.css";
import NavBar from "../Components/NavBar";
import PlantLibraryObject from "../Components/PlantLibraryObject";
import { useState, useEffect } from "react";
import axios from "axios";

const AddPlantForm = ({ onSubmit, onClose }) => {
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [plantName, setPlantName] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [message, setMessage] = useState("");

  const macPort = "3001";
  const winPort = "5000";
  const sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (sessionUser) {
      const currentUser = JSON.parse(sessionUser);
      setUserID(currentUser._id);
      setUsername(currentUser.username);
      console.log("CURRENT USER LOADED!");
      console.log("username = " + currentUser.username);
      console.log("userid = " + currentUser._id);
    } else {
      console.log("NO CURRENT USER, OBJECTS WON'T LOAD & CREATE");
    }
  }, []);

  const handleAddPlant = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:${macPort}/api/plants/add`,
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
        console.log("Connection to plants database:\n success\n Type: POST");
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
        <div className="form-group" style={{ marginBottom: "30px" }}>
          <p>Plant description:</p>
          <input
            type="text"
            className="plAddPlantTextfield"
            name="plantDescription"
            placeholder="Type in a description of your plant"
            value={plantDescription}
            onChange={(e) => setPlantDescription(e.target.value)}
          />
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

const PlantLibrary = () => {
  const [plants, setPlants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const sessionUser = sessionStorage.getItem("user");
  const [userID, setUserID] = useState("");
  const macPort = "3001";
  const winPort = "5000";

  useEffect(() => {
    if (sessionUser) {
      const currentUser = JSON.parse(sessionUser);
      setUserID(currentUser._id);
      console.log("CURRENT USER LOADED!");
      console.log("username = " + currentUser.username);
      console.log("userid = " + currentUser._id);
      fetchPlants();
    } else {
      console.log("NO CURRENT USER, OBJECTS WONT LOAD & CREATE");
    }
  }, [userID]);

  useEffect(() => {
    console.log("Current plants: ", plants);
  }, []);

  const fetchPlants = () => {
    axios
      .get(`http://localhost:${macPort}/api/plants/user/${userID}`)
      .then((response) => {
        setPlants(response.data);
        console.log(
          "Connection to appointments database:\n success\n Type: GET FILTERED"
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
  };

  const handleAddPlant = () => {
    fetchPlants();
    setShowForm(false);
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
            {plants.length > 0 ? (
              plants.map((plantObject) => (
                <PlantLibraryObject
                  key={plantObject.PlantID}
                  PlantName={plantObject.plantName}
                  PlantDescription={plantObject.plantDescription}
                />
              ))
            ) : (
              <p>You have no plants, add a plant.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantLibrary;
