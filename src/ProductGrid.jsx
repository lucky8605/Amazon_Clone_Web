import React from 'react';
import products from './Product'
import './index.css';

const ProductGrid = ({ addToCart }) => {
  

 return (
    <>
    <div className='row'>
      <div className='col-12'>
        <h3>Keep shopping for Men's Shooues, polos & Shooues </h3>
        <div className="product-grid">
          {products.map((products) => (
            <div key={products.id} className="product-card">
              <img src={products.image} alt={products.name} />
                <h3>{products.name}</h3>
                <p>{products.desc}</p>
                <h2>{products.price}</h2>
                <button type="button" className="btn btn-warning" onClick={() =>addToCart(products)}>
                   Add to cart
                </button>
            </div>
          ))}
        </div>

      </div>
    </div>

    </>
    
  );
};


export default ProductGrid;
