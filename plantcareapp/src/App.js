import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PlantLibrary from "./pages/PlantLibrary";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import Splash from "./pages/Splash";
=======
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PlantLibrary from './pages/PlantLibrary';
import ProductsPage from './pages/ProductsPage';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Settings from './pages/Settings'; 
import Splash from './pages/Splash';
import './App.css';
>>>>>>> main

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <NavBar />
=======
>>>>>>> main
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/SignIn" element={<SignIn />} />
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
