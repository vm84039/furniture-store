import React from "react";
import Footer from "../components/Footer";
import "../css/App.css";
import "../css/Style.css";

import { useAuth } from "../service/AuthContextProvider"; // Import useAuth hook
import LoginNavbar from "../components/LoginNavbar";
import ReceiptHistoryComponent from "../components/ReceiptHistoryComponent";
import { useUser } from "../service/UserContext";



const Inventory = () => {
  const { isLoggedIn } = useAuth(); // Use the useAuth hook to access login function and isLoggedIn state
  const { user } = useUser();


  return (
    <div className="App inventory">
      <LoginNavbar />
      <div className="receipt">
        <ReceiptHistoryComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Inventory;
