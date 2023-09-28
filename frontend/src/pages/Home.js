import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../css/App.css";
import { fetchFurnitureData } from "../service/FurnitureService"; // Import the data fetching function

export const Home = () => {
  const [setFurnitureData] = useState([]);

  useEffect(() => {
    fetchFurnitureData() // Fetch the data using the service function
      .then((data) => setFurnitureData(data))
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <div className="App app-container">
      <div className="home content">
        <h1 className="welcomeHeader">
          Welcome to Martin Exquisite Furniture!!
        </h1>
        <p className="welcome">
          Enter to see the most exotic furniture collection in the valley.
        </p>
        <a
          role="button"
          href="/inventory"
          className="btn btn-primary btn-lg btn-outline-light btn-dark homeButton"
        >
          Enter
        </a>
      </div>
      <Footer />
    </div>
  );
};
