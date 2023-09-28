import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Inventory from "./pages/Inventory";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AuthContextProvider from "./service/AuthContextProvider";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./service/CartContext";
import Checkout from "./pages/Checkout";
import { UserProvider } from "./service/UserContext";
import Completed from "./pages/Completed";

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <AuthContextProvider value={{ isLoggedIn }}>
        <UserProvider>
          <CartProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/completed" element={<Completed />} />
              </Routes>
            </div>
          </CartProvider>
        </UserProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
