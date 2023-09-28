import React from 'react';
import "../css/Style.css";

const GuestNavbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="/images/Mef.png" alt="MEF" className="logo"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div>
      <h1 className="navHeader">Martin Esquisite Furniture!!</h1>
    </div>
    <div className="collapse navbar-collapse navlist" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item navitem">
          <a className="nav-link active" aria-current="page" href="/register">Register</a>
        </li>
        <li className="nav-item navitem">
          <a className="nav-link" href="/login">Login</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  );
};

export default GuestNavbar;
