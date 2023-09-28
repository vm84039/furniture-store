import React from 'react';
import LoginForm from '../components/LoginForm'; // Import the component
import Footer from '../components/Footer'; 
import GuestNavbar from '../components/GuestNavbar';


const Login = ({setIsLoggedIn}) => {
  return (
    <div className="App app-container">
       <GuestNavbar /> {/* Use GuestNavbar component for the navbar */}
       <div className="inventory content">
       <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;