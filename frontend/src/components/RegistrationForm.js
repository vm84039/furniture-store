import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import {  postCustomerData } from '../service/APIService';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Import useNavigate





import "../css/Style.css";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate(); // Get the navigate function



  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);
    // Add your form validation logic here
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('All fields are required.');
      return;
    }
    const requestBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    postCustomerData(requestBody)
    navigate("/login");

  };

  return (
    <div className="register-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          <button
            type="button"
            className="btn btn-light password-toggle icon-button btn-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className="bi bi-eye icon-style"></i> {/* Use the Bootstrap "eye" icon */}
          </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-control"
            />
          <button
            type="button"
            className="btn btn-light password-toggle icon-button btn-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className="bi bi-eye icon-style"></i> {/* Use the Bootstrap "eye" icon */}
          </button>
          </div>
        </div>
        {!passwordsMatch && <p className="text-danger">Passwords do not match.</p>}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p className="link">
        Already registered?{' '}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
