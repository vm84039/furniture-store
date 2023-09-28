import React, { useState, useEffect } from "react";
import { getFurnitureData } from "../service/APIService";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCart } from "../service/CartContext"; // Import useCart
import { useNavigate } from "react-router-dom"; // Import useNavigate

function List(props) {
  const [rowData, setRowData] = useState([]);
  const { addToCart } = useCart(); // Use the useCart hook
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    getFurnitureData()
      .then((data) => setRowData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = rowData.filter((item) => {
    // Ensure that props.input is not undefined before using toLowerCase()
    const input = props.input || "";
    return (
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.description.toLowerCase().includes(input.toLowerCase())
    );
  });

  function formatPrice(price) {
    // Use the Intl.NumberFormat to format the price as currency
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // You can change the currency code as needed
    }).format(price);
  }

  const handleAddToCart = (item) => {
    // Pass 'item' as an argument
    addToCart(item);

    navigate("/inventory"); // Navigate to the inventory page
  };

  return (
    <div className="list-container">
      <div className="overflow-auto" style={{ maxHeight: "600px" }}>
        {filteredData.map((item) => (
          <Card style={{ width: "100%" }} key={item.id}>
            <Card.Body className="item-card">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img
                    className="item-img"
                    variant="top"
                    src={item.imageUrl}
                  />
                </Col>
                <Col md={5} className="col2">
                  <div className="d-flex justify-content-between align-items-start col1">
                    <div>
                      <div className="item-name">{item.name}</div>
                      <div className="item-description">{item.description}</div>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="col2">
                    <div className="item-category">Category</div>
                    <div className="item-detail">{item.category}</div>
                    <div className="item-price">Price</div>
                    <div className="item-detail">
                      {formatPrice(item.price)}
                    </div>{" "}
                    {/* Display formatted price */}
                    <div className="itemButton">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm btn-outline-light btn-dark homeButton"
                        onClick={() => handleAddToCart(item)} // Call handleAddToCart with 'item' as an argument
                      >
                        Add To Cart
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default List;
