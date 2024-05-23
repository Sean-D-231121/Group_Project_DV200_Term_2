import "./Appointments.css";
import "./Global.css";
import NavBar from "../Components/NavBar";

const AppointmentItem = ({ AppointmentName }) => {
  return (
    <div className="aptAppointmentItem">
      <h6> {AppointmentName} </h6>
    </div>
  );
};

const Appointments = () => {
  return (
    <div>
      <NavBar />
      <div className="webpage-frame" style={{ backgroundColor: "white" }}>
        <h2 style={{ marginTop: "50px", marginBottom: "50px" }}>
          Appointments
        </h2>
        <h5 style={{ marginTop: "0px", marginBottom: "30px" }}>
          Current Appointments
        </h5>

        <div className="aptAppointmentContainer">
          <div className="aptAppointmentContainerAppointments">
            <AppointmentItem AppointmentName={"Orchid"} />
            <AppointmentItem AppointmentName={"Algae"} />
            <AppointmentItem AppointmentName={"Grass"} />
            <AppointmentItem AppointmentName={"Kompos"} />
          </div>
          <p style={{ marginTop: "20px", marginBottom: "0px" }}>View all</p>
        </div>

        <div className="aptCreateAppointmentFrame">
          <h4>Create Appointments</h4>
          <div className="aptCreateAppCont">
            {/* Left side: Plant details */}
            <div className="aptCreateAppPlantDetails">
              <form action="">
                <p>Photo of the plant</p>
                <div className="aptCreateAppPlantDetailsPhoto"></div>

                <p
                  style={{
                    marginTop: "40px",
                    marginBottom: "5px",
                    textAlign: "left",
                  }}
                >
                  Plant type
                </p>
                {/* Select input for plant type */}
                <select
                  className="form-control aptSelectPlantType"
                  id="plantTypeSelect"
                  name="plantType"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                {/* Date input for appointment */}
                <p>Choose date for appointment</p>
                <input
                  type="date"
                  className="aptCreateAppDateSelectsDate"
                  name="appointmentDate"
                />

                {/* Submit button */}
                <button type="submit" className="aptCreateAppDateButton">
                  Create Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appointments;
