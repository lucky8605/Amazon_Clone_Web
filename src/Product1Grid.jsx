import React from "react";
import tshirt  from "./Product1";
import './index.css';
function Product1Grid({ addToCart }){
    return(
        <>
        <div className='row'>
            <div className='col-12'>
               <h3>Keep shopping for Men's T-shirts, polos & shirts </h3>
               <div className="product-grid">
                  {tshirt.map((tshirt) => (
                   <div key={tshirt.id} className="product-card">
                     <img src={tshirt.image} alt={tshirt.name} />
                     <h3>{tshirt.name}</h3>
                     <p>{tshirt.desc}</p>
                     <h2>{tshirt.price}</h2>
                     <button type="button" class="btn btn-warning btn" onClick={() =>addToCart(tshirt)}>
                      Add to cart
                     </button>
                   </div>
                 ))}
                </div>
            </div>
       </div>
        </>
    )
}
export default Product1Grid;