# Healthcare Appointment Booking

A responsive web application that allows users to search for doctors, view detailed profiles, check availability, and book healthcare appointments.  

Built with React and custom CSS (no CSS frameworks) for clean, maintainable, and component-scoped styling.

---

## Features

- **Landing Page:**  
  - Displays a searchable list of doctors with their name, specialization, profile image, availability status, rating, and experience.
  - Real-time filtering by doctor name or specialization.

- **Doctor Profile Page:**  
  - Shows detailed information about the selected doctor, including bio, rating, experience, and available appointment slots.
  - Option to book an appointment via a simple form.

- **Booking Form:**  
  - Users provide patient name, email, and choose an available slot.
  - Includes inline validation for input fields.
  - Shows confirmation message on successful booking.

- **Routing:**  
  - Client-side routing with React Router (`/` for landing and `/doctor/:id` for profile).

- **Styling:**  
  - Custom CSS for each React component to maintain modularity.
  - Uses plain CSS with px units; no Bootstrap, Tailwind, or other CSS frameworks.

- **Mocked Data:**  
  - Doctor profiles and available slots are provided from static `doctorsData.js` for easy prototyping.

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository or copy project files

git clone https://github.com/Venky-ctrl/book-an-appointment.git
cd book-an-appointment


2. Install dependencies:

npm install


3. Start the development server:

npm start


4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

---

## Project Structure

src/
├── App.js
├── App.css
├── index.js
├── index.css
└── components/
    ├── BookAppointmentForm/
    │   ├── index.js
    │   └── index.css
    ├── DoctorProfile/
    │   ├── index.js
    │   └── index.css
    ├── DoctorsData/
    │   └── index.js
    └── LandingPage/
        ├── index.js
        └── index.css


- Each major component has its own CSS file for scoped styling.
- `doctorsData.js` contains static mocked doctor data.
- Routing is set up in `App.js` using React Router.

---

## How to Use

- On the landing page, use the search bar to filter doctors by name or specialty.
- Click on a doctor card to view detailed profile and available appointment slots.
- Click **Book Appointment** to open the form, fill in information, and submit.
- See confirmation message upon successful booking.

---

## Future Improvements

- Connect to a real backend API for dynamic doctor data and appointments.
- Add user authentication and profile management.
- Support appointment cancellation and modification.
- Enhance accessibility and mobile responsiveness.
- Add unit and integration tests for reliability.
- Include phone number and additional form fields for better data collection.

---

## Technologies Used

- React (Functional Components & Hooks)
- React Router (Client-side routing)
- JavaScript (ES6+)
- CSS (Modular component-based styling, px units)
- Mocked JSON data

---

## Image Credits

Profile images are sourced from [randomuser.me](https://randomuser.me) — a free API providing placeholder user photos for development and prototyping.

---

## License

This project is for demonstration and educational purposes only.

---

## Contact

For questions or feedback, please contact mail to : venkybandari603@gmail.com.

---

Thank you for trying out the Healthcare Appointment Booking app!
