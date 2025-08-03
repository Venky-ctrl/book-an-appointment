
import React, { useState } from "react";
import { doctorsData } from "../DoctorsData";
import { Link } from "react-router-dom";

import './index.css';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctorsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="landing-container">
      <h1 className="landing-title">Healthcare Appointment Booking</h1>
      <input
        type="text"
        placeholder="Search doctors by name or specialization..."
        className="landing-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="landing-doctor-grid">
        {filteredDoctors.map((doctor) => (
          <Link key={doctor.id} to={`/doctor/${doctor.id}`} className="landing-doctor-card">
            <img src={doctor.profileImageUrl} alt={doctor.name} className="landing-doctor-img" />
            <div>
              <h2 className="landing-doctor-name">{doctor.name}</h2>
              <p className="landing-doctor-special">{doctor.specialization}</p>
              <p className={doctor.availableSlots.length > 0 ? "landing-doctor-available" : "landing-doctor-unavailable"}>
                {doctor.availableSlots.length > 0
                  ? `${doctor.availableSlots.length} slots available`
                  : "No slots available"}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {filteredDoctors.length === 0 && (
        <div className="landing-no-result">No doctors found matching your search.</div>
      )}
    </div>
  );
};

export default LandingPage;

