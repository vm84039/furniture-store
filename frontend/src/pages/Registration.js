import React from 'react';
import RegistrationForm from '../components/RegistrationForm'; // Import the component
import Footer from '../components/Footer'; 
import GuestNavbar from '../components/GuestNavbar';

const Registration = () => {
  return (
    <div className="App app-container">
       <GuestNavbar /> {/* Use GuestNavbar component for the navbar */}
       <div className="inventory content">
      <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Registration;