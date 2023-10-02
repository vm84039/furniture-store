import React, { useEffect} from "react";
import Footer from "../components/Footer";
import LoginNavbar from "../components/LoginNavbar";
import { useAuth } from "../service/AuthContextProvider"; // Import useAuth hook
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import ShoppingCart from "../components/ShoppingCart";

import "../css/App.css";
import "../css/Style.css";

export const Checkout = () => {
  const { isLoggedIn } = useAuth(); // Use the useAuth hook to access login function and isLoggedIn state
  const navigate = useNavigate(); // Get the navigate function
  useEffect(() => {
    // Redirect to /inventory if isLoggedIn is false
    if (!isLoggedIn) {
      navigate("/inventory");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="App app-container">
      <LoginNavbar />
      <div className="inventory content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div class="row py-5 p-4 bg-white rounded shadow-sm">
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Checkout;
