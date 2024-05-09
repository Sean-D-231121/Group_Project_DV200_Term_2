import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PlantLibrary from './pages/PlantLibrary';
import ProductsPage from './pages/ProductsPage';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Settings from './pages/Settings';
function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
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
    </div>
  );
}

export default App;
