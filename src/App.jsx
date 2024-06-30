import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Master from "./Master";
import Nav from "./Nav";
import Cart from "./Cart";
import Footer from "./Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Master addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
