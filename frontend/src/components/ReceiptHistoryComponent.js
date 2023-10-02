import React, { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "../service/CartContext"; // Import useCart
import { useUser } from "../service/UserContext";
import {  useParams, useLocation } from 'react-router-dom';

import "../css/Style.css";

const ReceiptHistory = () => {

  const { user } = useUser();
  const { email, firstName, lastName } = user;
  const subtotal = user.subtotal;
  const shippingCost = user.shippingCost
  const tax = user.tax
  const grandTotal = user.grandTotal;
  const location = useLocation();
  const { orderId } = useParams(); // Get orderId from route parameter
  const { state: { rowData } } = useLocation(); // Get rowData from state
  const [orderItems, setOrderItems] = useState([]);

  console.log(orderId);
  console.log(rowData);
  console.log(rowData.date);


  const history = rowData.find((order) => order.id === orderId);

  console.log(history);




  const generateRandomOrderNumber = () => {
    // Generate a random order number between 150000 and 950000
    return Math.floor(Math.random() * (950000 - 150000 + 1)) + 150000;
  };

  function formatPrice(price) {
    // Use the Intl.NumberFormat to format the price as currency
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // You can change the currency code as needed
    }).format(price);

  }

  return (
    <div className="receipt-paper">
      <h2 className="receipt-title">Itemized Receipt</h2>
      <div className="receipt-section">
        <p className="receipt-category">Order Number:</p>
        <p className="receipt-item">{generateRandomOrderNumber()}</p>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Customer:</p>
        <p className="receipt-item">
          {firstName} {lastName}
        </p>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Email:</p>
        <p className="receipt-item">{email}</p>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Company Information:</p>
        <address className="receipt-item">
          Martin Exquisite Furniture
          <br />
          1234 Nightmare Ave
          <br />
          Paradise Valley, AZ 85048
          <br />
          Phone: 313-555-1212
        </address>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Order Details:</p>
        <ul>
          {rowData.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: $
              {item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Subtotal:</p>
        <p className="receipt-item">${subtotal}</p>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Shipping and Handling:</p>
        <p className="receipt-item">${shippingCost}</p>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Tax (8%):</p>
        <p className="receipt-item">{formatPrice(tax)}</p>
      </div>
      <div className="receipt-section">
        <p className="receipt-category">Grand Total:</p>
        <p className="receipt-item">{formatPrice(grandTotal)}</p>
      </div>
      <p className="receipt-thankyou">
        Thank you for shopping with Martin Exquisite Furniture! We appreciate
        your business and hope you enjoy your new furniture. If you have any
        questions or concerns, please don't hesitate to contact us at
        313-555-1212. Have a great day!
      </p>
    </div>
  );
};

export default ReceiptHistory
;
