import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DoctorProfile from "./components/DoctorProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-bg">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
