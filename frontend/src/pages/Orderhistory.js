import React, { useEffect} from "react";

import Footer from '../components/Footer'; 
import LoginNavbar from '../components/LoginNavbar';
import { useAuth } from "../service/AuthContextProvider"; 
import { useNavigate } from "react-router-dom"; 
import HistoryTable from "../components/HistoryTable";





const OrderHistory = () => {
    const { isLoggedIn } = useAuth(); 
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
            <HistoryTable />
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;