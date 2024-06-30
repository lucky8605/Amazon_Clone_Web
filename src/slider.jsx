import React from "react";
import './index.css';


function Slider(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/hero1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                   <img src="images/hero2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                   <img src="images/hero3.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                   <img src="images/hero4.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                   <img src="images/hero5.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                   <img src="images/hero6.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
           </button>
        </div>
        </>
    )
}
export default Slider;