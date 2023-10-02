import React, { useState, useEffect, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Style.css";
import { getOrdersForUser } from "../service/APIService";
import { useUser } from "../service/UserContext"; 
import Table from 'react-bootstrap/Table';
import { useNavigate} from "react-router-dom"; // Import useHistory

const HistoryTable = () => {
  const [rowData, setRowData] = useState([]);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    getOrdersForUser(user.userId)
      .then((data) => setRowData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [user.userId]);

  const getReceipt = (orderId) => {
    navigate(`/ReceiptHistory/${orderId}`, { state: { rowData } });

  };

  return (
    <div className="container mt-4">
      <h2 className="historyHeader">User Information</h2>
      <p className="history">Name: {user.firstName} {user.lastName}</p>
      <p className="history">Email: {user.email}</p>
      
      <h2 className="historyHeader">Order History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Subtotal</th>
            <th>Shipping Cost</th>
            <th>Tax</th>
            <th>Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>${order.subtotal.toFixed(2)}</td>
              <td>${order.shippingCost.toFixed(2)}</td>
              <td>${order.tax.toFixed(2)}</td>
              <td>${order.grandTotal.toFixed(2)}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryTable;
