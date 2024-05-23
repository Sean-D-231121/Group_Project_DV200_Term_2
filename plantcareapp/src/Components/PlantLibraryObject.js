import "../pages/PlantLibrary.css";

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
      <h6>{PlantName}</h6>
      <p>{PlantDescription}</p>
      <button className="plObjectViewPlantHisBTN">Plant history</button>
    </div>
  );
};

export default PlantLibraryObject;
