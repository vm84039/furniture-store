import React from "react";
import "../css/Style.css";
import CartButton from "./CartButton";
import { useCart } from "../service/CartContext"; // Import useCart hook
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../service/AuthContextProvider"; // Import useAuth hook
import { useUser } from "../service/UserContext";

const LoginNavbar = () => {
  const { cart } = useCart(); // Use the useCart hook to access cart data
  const { emptyCart } = useCart(); // Use the useCart hook
  const { logout } = useAuth(); // Use the useAuth hook to access login function and isLoggedIn state
  const { emptyUser } = useUser();

  const navigate = useNavigate(); // Get the navigate function

  const logoutUser = (item) => {
    emptyCart();
    emptyUser();
    logout();

    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/images/Mef.png" alt="MEF" className="logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <h1 className="navHeader">Martin Esquisite Furniture!!</h1>
        </div>
        <div className="collapse navbar-collapse navlist" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navitem">
              <button
                className="btn btn-danger logout-button"
                onClick={() => logoutUser()}
              >
                <div className="logout-icon"> Logout </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
