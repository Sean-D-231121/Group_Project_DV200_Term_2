import React from "react";
import SideNav, { Toggle, NavItem, NavText } from "@trendmicro/react-sidenav";
import { useNavigate } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Navbar.css";
import LogoSmall from "./Logosmall.png";
function MySideNav() {
  const navigate = useNavigate();

  return (
    <SideNav
      onSelect={(selected) => {
        navigate("/" + selected);
      }}
      className="mysidenav"
    >
      <SideNav.Toggle />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src={LogoSmall}
          alt="Logo"
          style={{
            width: "50px",
            height: "auto",
            marginRight: "50px",
            marginBottom: "10px",
            marginTop: "60px",
          }}
        />
      </div>
      <SideNav.Nav defaultSelected="Home">
        <NavItem eventKey="Home">
          <NavText>
            <span style={{ color: "black" }}>Home</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="PlantLibrary">
          <NavText>
            <span style={{ color: "black" }}>Plant Library</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="ProductsPage">
          <NavText>
            <span style={{ color: "black" }}>Products Page</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="Cart">
          <NavText>
            <span style={{ color: "black" }}>Cart</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="Appointments">
          <NavText>
            <span style={{ color: "black" }}>Appointments</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="Settings">
          <NavText>
            <span style={{ color: "black" }}>Settings</span>
          </NavText>
        </NavItem>
        <NavItem eventKey="SignIn">
          <NavText>
            <span style={{ color: "black" }}>Sign out</span>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default MySideNav;
