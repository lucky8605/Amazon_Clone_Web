import React from "react";
import ProductGrid from "./ProductGrid";
import Product1Grid from "./Product1Grid";
import Slider from "./slider";

function Master({ addToCart }){
    return(
        <>
        <Slider></Slider>
        <div className="container-fluid">
           <ProductGrid addToCart={addToCart}></ProductGrid>
        </div>
        <div className="container-fluid">
           <Product1Grid addToCart={addToCart}></Product1Grid>
        </div>
        
        
        </>
    )

}
export default Master;