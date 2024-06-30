import React from "react";
import './index.css';


function Footer(){
    return(
        <>
        <footer>
            <div className="foot-panel1">Back to top </div>
            <div className="foot-panel2">
                <ul>
                    <p>Get to Know Us</p>
                    <a>About us</a>
                    <a>careers</a>
                    <a>Press Releases</a>
                    <a>Amazon Science</a>
                </ul>
                <ul>
                    <p>Contact with Us</p>
                    <a>Facbook</a>
                    <a>Twitter</a>
                    <a>Instagram</a>
                </ul>
                <ul>
                    <p>Make Money with Us</p>
                    <a>Sell on Amazon</a>
                    <a>Sell under Amazon Accelerator</a>
                    <a>Protect and Build Your Brand</a>
                    <a>Amazon Global Selling</a>
                    <a>Become an Affiliate</a>
                    <a>Fulfilment by Amazon</a>
                    <a>Advertise Your Products</a>
                    <a>Amazon Pay on Merchants</a>
                </ul>
                <ul>
                    <p>Let Us Help You</p>
                    <a>COVID-19 and Amazon</a>
                    <a>Your Account</a>
                    <a>Returns Centre</a>
                    <a>Recalls and Product Safety Alerts</a>
                    <a>100% Purchase Protection</a>
                    <a>Amazon App Download</a>
                    <a>Help</a>
                </ul>
            </div>
            <div className="foot-panel3">
                <div className="logo">
                <img src="images/amazon_logo.png" className="logo1"/>

                </div>
            </div>
 
        </footer>
        </>
    )
}
export default Footer;