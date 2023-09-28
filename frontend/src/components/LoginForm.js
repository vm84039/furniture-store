import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "../css/Style.css";
import { loginCustomerData } from "../service/APIService";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../service/AuthContextProvider"; // Import useAuth hook
import { useUser } from "../service/UserContext"; // Import the UserProvider

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Get the navigate function
  const { login } = useAuth(); // Use the useAuth hook to access login function and isLoggedIn state
  const { updateUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      email: email,
      password: password,
    };
    const response = await loginCustomerData(requestBody);

    if (response.status === 201) {
      console.log(response.data);
      const userData = {
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      };

      updateUser(userData);
      login();
      navigate("/inventory"); // Navigate to the inventory page
    } else if (response.status === 404) {
      setError("Authentication failed");
    } else {
      setError("Unexpected response from the server");
    }
  };

  return (
    <div className="container ">
      <div className="row justify-content-center register-form">
        <div className="col-md-6">
          <div className="register-container login-container">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
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
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
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
                      <i className="bi bi-eye icon-style"></i>
                    </button>
                  </div>
                </div>
                {error && <p className="error">{error}</p>}

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer">
              <p className="link">
                Don't have an account? <Link to="/registration">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
