import "./PlantLibrary.css";
import NavBar from "../Components/NavBar";

const PlantLibraryObject = ({
  PlantID,
  PlantImage,
  PlantName,
  PlantDescription,
}) => {
  return (
    <div className="plObjectMain">
      <button className="plObjectCloseBTN">-</button>
      <div className="plObjectImage"></div>
      <h6>Plant name</h6>
      <p>Plant description</p>
      <button className="plObjectViewPlantHisBTN">Plant history</button>
    </div>
  );
};

const PlantLibrary = () => {
  return (
    <div>
      <NavBar />
      <div className="plMain">
        <h2 style={{ marginTop: "40px", marginBottom: "40px" }}>
          Plants Library
        </h2>
        <div className="plLibrarySpace">
          <button className="plLibraryAddPlamtBTN">Add plant</button>
          <div className="plLibraryContainer">
            <PlantLibraryObject />
            <PlantLibraryObject />
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
