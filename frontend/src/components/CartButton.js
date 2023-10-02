import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Style.css";

const CartButton = ({ cart }) => {
  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate(); // Get the navigate function

  const handleClick = () => {
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
<button
  className={`btn btn-primary btn-lg btn-outline-info position-relative cart-button ${totalQuantity === 0 ? 'disabled' : ''}`}
  onClick={handleClick}
  disabled={totalQuantity === 0}
>
  <i className="bi bi-cart cart-icon"></i> {/* Icon */}
  {totalQuantity > 0 && (
    <sup className="cart-badge cart-sup">{totalQuantity}</sup>
  )}
</button>
  );
};

export default CartButton;
