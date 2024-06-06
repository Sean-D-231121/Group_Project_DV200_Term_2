import "../pages/Appointments.css";
import axios from "axios";

const AppointmentItem = ({ id, plants, Reason, AppointmentDate, onDelete }) => {
  // Function to format the date
  const aptID = id;
  const PORT = "5000";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:${PORT}/api/appointments/delete/${aptID}`
      );
      if (response.status === 200) {
        console.log("Appointment deleted successfully");
        onDelete(id);
      } else {
        console.log("Error deleting Appointment");
      }
    } catch (error) {
      console.error("Appointment not found!", error);
      onDelete(id);
    }
  };

  let plantNames = "";
  let plant_S = "";

  if (plants.length > 1) {
    plantNames = "Plants: ";
    plant_S = "Plants";
    plantNames += plants
      .map((plant, index) =>
        index === plants.length - 1 ? plant.plantName : plant.plantName + ", "
      )
      .join("");
  } else {
    plantNames = "Plant: " + plants[0].plantName;
    plant_S = "Plant";
  }

  return (
    <div className="aptAppointmentItem">
      <h5>{plantNames}</h5>
      <h6 style={{ fontFamily: "Red Hat Display, sans-serif" }}>
        {plant_S} for booking: <strong>{plants.length}</strong>
      </h6>
      <h6 style={{ fontFamily: "Red Hat Display, sans-serif" }}>
        Reason: <strong>{Reason}</strong>
      </h6>
      <h6 style={{ fontFamily: "Red Hat Display, sans-serif" }}>
        When: <strong>{formatDate(AppointmentDate)}</strong>
      </h6>
      <button
        className="aptButton2"
        style={{ marginTop: "10px" }}
        onClick={handleDelete}
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default AppointmentItem;
