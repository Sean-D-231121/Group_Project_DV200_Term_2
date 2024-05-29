import "./PlantLibrary.css";
import "./Global.css";
import NavBar from "../Components/NavBar";
import PlantLibraryObject from "../Components/PlantLibraryObject";

const PlantLibrary = () => {
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
            <PlantLibraryObject />
            <PlantLibraryObject />
            <PlantLibraryObject />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlantLibrary;
