import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <>
        <header>
            <div className="row bg-dark text-white height: 60px; align-items:center navbar">
                
                    <div className="navbar align-items:center;">
                        <div className="nav-logo bord">
                           <img src="images/amazon_logo.png" className="logo"/>
                           <span className="nav-logo-locale">.in</span>
                        </div>
                    </div>
                
                
                    <div className="nav-add bord">
                        <p className="add-first">Deliver to</p>
                        <div className="add-icon">
                            <i class="fa-solid fa-location-dot icon"></i>
                            <p className="add-second">India</p>
                        </div>
                    </div>
              
                
                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Amazon" className="search-input"/>
                        <div className="search-icon">
                           <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="nav-singin bord">
                        <p><span>Hello, sign in</span></p>
                        <p className="nav-second">Account & Lists</p>
                    </div>
                    <div className="nav-return bord">
                        <p><span>Returns</span></p>
                        <p className="nav-second">& Orders</p>
                    </div>
                    <div className="nav-cart bord">
                        <NavLink className='nav-link'to='/Cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                       <span>Cart</span>  
                        </NavLink>
                       
                    </div>
                
            </div>
        </header>
        </>
    )
}
export default Nav;