
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doctorsData } from "../DoctorsData";
import BookAppointmentForm from "../BookAppointmentForm";
import './index.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => doc.id === id);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!doctor) {
    return (
      <div className="container">
        <div className="doctorprofile-notfound">Doctor not found</div>
        <Link to="/" className="back-link">← Back to Doctors</Link>
      </div>
    );
  }

  const handleBookingSuccess = () => {
    setBookingConfirmed(true);
    setShowBookingForm(false);
  };

  return (
    <div className="doctorprofile-container">
      <Link to="/" className="doctorprofile-back">← Back to Doctors</Link>
      <div className="doctorprofile-card">
        <img src={doctor.profileImageUrl} alt={doctor.name} className="doctorprofile-img" />
        <div>
          <h1 className="doctorprofile-name">{doctor.name}</h1>
          <p className="doctorprofile-special">{doctor.specialization}</p>
          <div>
            <span className="doctorprofile-rating">★ {doctor.rating}</span>
            <span className="doctorprofile-experience">{doctor.experience} experience</span>
          </div>
          <p className="doctorprofile-bio">{doctor.bio}</p>
        </div>
      </div>

      <div className="doctorprofile-availability">
        <h2 className="doctorprofile-availability-title">Availability</h2>
        {doctor.availableSlots.length > 0 ? (
          <div className="doctorprofile-slot-list">
            {doctor.availableSlots.map((slot, i) => (
              <div key={i} className="doctorprofile-slot">
                <span>{new Date(slot).toLocaleString()}</span>
              </div>
            ))}
            {!showBookingForm && !bookingConfirmed && (
              <button className="doctorprofile-book-btn" onClick={() => setShowBookingForm(true)}>
                Book Appointment
              </button>
            )}
          </div>
        ) : (
          <div className="doctorprofile-no-availability">No slots available.</div>
        )}
      </div>

      {bookingConfirmed && (
        <div className="doctorprofile-confirmation">
          Appointment Booked Successfully! You will receive a confirmation email.
        </div>
      )}

      {showBookingForm && !bookingConfirmed && (
        <div className="booking-form-wrapper">
          <BookAppointmentForm
            doctor={doctor}
            onConfirm={handleBookingSuccess}
            onCancel={() => setShowBookingForm(false)}
          />
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;

