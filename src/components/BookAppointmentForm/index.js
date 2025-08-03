
import React, { useState } from "react";
import './index.css';

const BookAppointmentForm = ({ doctor, onConfirm, onCancel }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    selectedSlot: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.patientName.trim()) errs.patientName = "Patient name is required";
    if (!validateEmail(formData.email)) errs.email = "Please enter a valid email";
    if (!formData.selectedSlot) errs.selectedSlot = "Select a slot";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        onConfirm();
      }, 1000);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div>
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          className={errors.patientName ? "input-error" : ""}
        />
        {errors.patientName && <span className="form-error">{errors.patientName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>
      <div>
        <label>Appointment Slot:</label>
        <select
          name="selectedSlot"
          value={formData.selectedSlot}
          onChange={handleChange}
          className={errors.selectedSlot ? "input-error" : ""}
        >
          <option value="">-- Select a time slot --</option>
          {doctor.availableSlots.map((slot, i) => (
            <option key={i} value={slot}>
              {new Date(slot).toLocaleString()}
            </option>
          ))}
        </select>
        {errors.selectedSlot && <span className="form-error">{errors.selectedSlot}</span>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={submitting} className="book-btn">
          {submitting ? "Booking..." : "Book Appointment"}
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn" disabled={submitting}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookAppointmentForm;
