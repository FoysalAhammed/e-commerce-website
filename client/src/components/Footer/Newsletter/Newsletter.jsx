import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import "./Newsletter.scss"
export default function Newsletter() {
  return (
    <div className='newsletter-section'>
      <div className="newsletter-content">
       <span className="small-text">Newsletter</span>
       <span className="big-text">Sign Up For Lattest Updates nad Offers</span>
       <div className="form">
        <input type="text" placeholder=' Email Address' />
        <button className="button">Subscribe</button>
       </div>
       <div className="text">Will be used in accordance with our Privacy Policy</div>
       <div className="social-icons">
         <div className="icon">
          <FaFacebookF/>
         </div>
         <div className="icon">
          <FaTwitter/>
         </div>
         <div className="icon">
          <FaInstagram/>
         </div>
         <div className="icon">
          <FaLinkedin/>
         </div>
       </div>
      </div>
    </div>
  )
}
