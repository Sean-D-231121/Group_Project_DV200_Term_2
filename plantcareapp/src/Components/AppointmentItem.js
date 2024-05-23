import "../pages/Appointments.css";

const AppointmentItem = ({ PlantName, AppointmentDate }) => {
  return (
    <div className="aptAppointmentItem">
      <h6>
        {" "}
        {PlantName} - {AppointmentDate}{" "}
      </h6>
    </div>
  );
};

export default AppointmentItem;
