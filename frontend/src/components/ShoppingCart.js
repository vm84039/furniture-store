import React, { useState } from "react";
import { useCart } from "../service/CartContext"; // Import useCart
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { postOrder } from "../service/APIService";

import { useUser } from "../service/UserContext"; // Import the UserProvider



const ShoppingCart = () => {
  const { cart, calculateTotals, removeFromCart, updateQuantity, emptyCart  } = useCart();
  const navigate = useNavigate(); // Get the navigate function
  const { subtotal, shippingCost, tax, grandTotal } = calculateTotals();
  const { user } = useUser();
  const [currentDate, setCurrentDate] = useState(new Date());

  function formatPrice(price) {
    // Use the Intl.NumberFormat to format the price as currency
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // You can change the currency code as needed
    }).format(price);
  }
  const removeItem = (item) => {
    removeFromCart(item);
  };

  const purchase = () => {
    setCurrentDate(new Date());
    const date = formatDateToYYYYMMDD(currentDate);
    const requestBody = {
      date: date,
      userId: user.userId,
      cart: cart,
      subtotal:subtotal,
      shippingCost:shippingCost,
      tax:tax,
      grandTotal:grandTotal
    };
    console.log(user.userId);
    console.log(date);
    console.log(cart);
    postOrder (requestBody);
    emptyCart();
    navigate("/completed");

  };
    function formatDateToYYYYMMDD(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`
    }

  return (
    <div className="shopping-cart">
      <div className="px-4 px-lg-0">
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light"></th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td className="border-0" style={{ width: "10%" }}>
                            <div className="p-2">
                              <img
                                className="img-fluid rounded shadow-sm"
                                src={item.imageUrl}
                                alt={item.name}
                                style={{
                                  maxHeight: "100px",
                                  maxWidth: "150px",
                                }}
                              />
                            </div>
                          </td>
                          <td className="border-0">
                            <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0">
                                <p className="text-dark d-inline-block align-middle register-form">
                                  <strong>{item.name}</strong>
                                </p>
                              </h5>
                              <span className="text-muted font-weight-normal font-italic d-block">
                                Category: {item.category}
                              </span>
                            </div>
                          </td>
                          <td
                            className="border-0 align-middle"
                            style={{ width: "15%" }}
                          >
                            <strong>{formatPrice(item.price)}</strong>
                          </td>
                          <td
                            className="border-0 align-middle"
                            style={{ width: "15%" }}
                          >
                            <div className="quantity-control d-flex align-items-center">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                                className="btn btn-link"
                              >
                                <i
                                  className="bi bi-dash plus-minus"
                                  style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                  }}
                                ></i>
                              </button>
                              <p className="quantity mb-0">
                                <strong>{item.quantity}</strong>
                              </p>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                disabled={item.quantity >= 5}
                                className="btn btn-link"
                              >
                                <i
                                  className="bi bi-plus plus-minus"
                                  style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                  }}
                                ></i>
                              </button>
                            </div>
                          </td>
                          <td
                            className="border-0 align-middle"
                            style={{ width: "10%" }}
                          >
                            <button onClick={() => removeItem(item.id)}>
                              <i className="bi bi-trash3 shopping-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  <strong>Order summary</strong>
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>
                      <strong>{formatPrice(subtotal)}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">
                        Shipping and handling - $75 per item
                      </strong>
                      <strong>{formatPrice(shippingCost)}</strong>
                    </li>
                    <li
                      className="d-flex justify-content-between py-3"
                      style={{ borderBottom: "2px solid black" }}
                    >
                      <strong className="text-muted">Tax - 8%</strong>
                      <strong>{formatPrice(tax)}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <h4 className="font-weight-bold">
                        <strong className="text-muted">Total</strong>
                      </h4>
                      <h4 className="font-weight-bold">
                        <strong>{formatPrice(grandTotal)}</strong>
                      </h4>
                    </li>
                  </ul>
                  <button
                    onClick={() => purchase()}
                    className="btn btn-dark rounded-pill py-2 btn-block"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
