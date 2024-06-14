import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PlantLibrary from "./pages/PlantLibrary";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage"; // Import the new ProductPage component
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import Cart from "./pages/Cart";
import Splash from "./pages/Splash.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PlantLibrary" element={<PlantLibrary />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} /> 
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
