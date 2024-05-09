import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import PlantLibrary from './Pages/PlantLibrary';
import ProductsPage from './Pages/ProductsPage';
import Home from './Pages/Home';
import Appointments from './Pages/Appointments';
import Settings from './Pages/Settings';
import NavBar from './Components/NavBar'; // Import your custom NavBar component
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> {/* Render your custom NavBar component */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PlantLibrary" element={<PlantLibrary />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

