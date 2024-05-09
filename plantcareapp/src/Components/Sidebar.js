import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { useNavigate } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="appointments">
          <NavText>Appointments</NavText>
        </NavItem>
        <NavItem eventKey="plantlibrary">
          <NavText>PlantLibrary</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
  
};
export default Sidebar;
