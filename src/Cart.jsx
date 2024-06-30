import React from 'react';
import './index.css';

const Cart = ({ cart,clearCart  }) => {
  const handleCheckout = () => {
    alert('Your order has been placed successfully');
    clearCart();
  };
  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g,"")), 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (<p>Your cart is empty</p>):(
        <div>
          <button className="btn btn-secondary" onClick={() => alert('Deselected all items')}>
            Deselect all items
          </button>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <span>{item.price}</span>
              </div>
              <button className="btn btn-danger" onClick={() => alert('Item removed')}>
                Delete
              </button>
            </div>
          ))}
          <button className="btn btn-success" onClick={handleCheckout}>
            Proceed to Buy
          </button>
          <h2>:Total Amount: ${totalAmount}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
