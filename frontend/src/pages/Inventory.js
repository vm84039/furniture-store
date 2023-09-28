import React from "react";
import Footer from "../components/Footer";
import "../css/App.css";
import GuestNavbar from "../components/GuestNavbar";
import LoginNavbar from "../components/LoginNavbar";
import FurnitureTable from "../components/FurnitureTable"; // Import the FurnitureTable component
import { useAuth } from "../service/AuthContextProvider"; // Import useAuth hook

const Inventory = () => {
  const { isLoggedIn } = useAuth(); // Use the useAuth hook to access login function and isLoggedIn state
  console.log("Login: ", isLoggedIn);

  return (
    <div className="App app-container">
      <div>{isLoggedIn ? <LoginNavbar /> : <GuestNavbar />}</div>
      <div className="inventory content">
        <FurnitureTable />
      </div>
      <Footer />
    </div>
  );
};

export default Inventory;
