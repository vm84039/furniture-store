import React from "react";
import Footer from "../components/Footer";
import "../css/App.css";
import "../css/Style.css";

import { useAuth } from "../service/AuthContextProvider"; // Import useAuth hook
import ReceiptNavbar from "../components/ReceiptNavbar";
import Receipt from "../components/Receipt";

const Inventory = () => {
  const { isLoggedIn } = useAuth(); // Use the useAuth hook to access login function and isLoggedIn state
  console.log("Login: ", isLoggedIn);

  return (
    <div className="App inventory">
      <ReceiptNavbar />
      <div className="receipt">
        <Receipt />
      </div>
      <Footer />
    </div>
  );
};

export default Inventory;
