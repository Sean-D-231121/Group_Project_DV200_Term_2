import "./PlantLibrary.css";
import "./Global.css";
import NavBar from "../Components/NavBar";
import PlantLibraryObject from "../Components/PlantLibraryObject";
import { useState, useEffect } from "react";

const PlantLibrary = () => {
  const [plants, setPlants] = useState([]);
  const [currentUserID, setCurrentUserID] = useState([]);
  const userID = 22;
  // Simulate loading plant objects onto the plant array
  // Response result simulation

  useEffect(() => {
    const plantObjects = [
      {
        PlantID: 1,
        PlantName: "Aloe Vera",
        PlantDescription:
          "A succulent plant species of the genus Aloe. It is cultivated for agricultural and medicinal uses.",
        PlantImageURL: "https://example.com/images/aloe-vera.jpg",
        UserID: 22,
      },
      {
        PlantID: 2,
        PlantName: "Spider Plant",
        PlantDescription:
          "A popular houseplant that is easy to grow. It has long, arching leaves that are green with white stripes.",
        PlantImageURL: "https://example.com/images/spider-plant.jpg",
        UserID: 22,
      },
      {
        PlantID: 3,
        PlantName: "Snake Plant",
        PlantDescription:
          "Also known as mother-in-law's tongue, it is one of the easiest houseplants to care for.",
        PlantImageURL: "https://example.com/images/snake-plant.jpg",
        UserID: 69,
      },
      {
        PlantID: 4,
        PlantName: "Fiddle Leaf Fig",
        PlantDescription:
          "A species of flowering plant in the mulberry and fig family. It is popular as an ornamental plant.",
        PlantImageURL: "https://example.com/images/fiddle-leaf-fig.jpg",
        UserID: 420,
      },
      {
        PlantID: 5,
        PlantName: "Monstera",
        PlantDescription:
          "Also known as the Swiss cheese plant, it is famous for its large, perforated leaves.",
        PlantImageURL: "https://example.com/images/monstera.jpg",
        UserID: 22,
      },
      {
        PlantID: 6,
        PlantName: "Peace Lily",
        PlantDescription:
          "A popular indoor plant known for its beautiful white flowers and dark green leaves.",
        PlantImageURL: "https://example.com/images/peace-lily.jpg",
        UserID: 22,
      },
    ];

    // Simulate loading correct plant objects for the current user logged in
    // Filter plants based on currentUserID
    const userPlants = plantObjects.filter((plant) => plant.UserID === userID);
    setPlants(userPlants);

    // useEffect(() => {
    //   // Fetch plants from the backend
    //   axios
    //     .get("http://localhost:5000/api/plants")
    //     .then((response) => {
    //       setPlants(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("There was an error fetching the products!", error);
    //     });
    // }, []);

    console.log(plantObjects);
  });

  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h2 style={{ marginTop: "40px", marginBottom: "40px" }}>
          Plants Library
        </h2>
        <div className="plLibrarySpace">
          <button className="plLibraryAddPlamtBTN">Add plant</button>
          <div className="plLibraryContainer">
            {plants.map((plantObject) => (
              <PlantLibraryObject
                key={plantObject.PlantID} // Ensure unique key for each element
                PlantName={plantObject.PlantName}
                PlantDescription={plantObject.PlantDescription}
                PlantImage={plantObject.PlantImageURL}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlantLibrary;
