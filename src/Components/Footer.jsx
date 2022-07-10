import React from 'react';
import logo from "./assets/logo.png";
import Email from "./assets/email.png";
import Phone from "./assets/phone.png";
import whatsapp from "./assets/whatsapp.png";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
import { SocialIcon } from 'react-social-icons';
import "./css/Footer.css"



const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <div className="footer">
    <div className="footer-container">

      
      <div className="about">
        <img src={logo} className="img" alt="" />
          <div className="Desc">
          At AssignmentCure, we take pride 
          in offering excellent academic 
          assignment services. Contact 
          our professionals and enjoy the 
          best assignment services.
          </div>
      
      </div>

      <div className="Register_a">
         <div className='footer-heading'>
          <span className='vertical'></span>
          <h2>Quick Links</h2>
         </div> 
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Order Now</a></li>
            <li><a href="/">Blogs</a></li>
          </ul>
      </div>

      <div className="Register_a">
      <div className='footer-heading'>
          <span className='vertical'></span>
          <h2>Supports</h2>
         </div> 
          <ul>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Policies</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
      </div>

      <div className="Register_a">
      <div className='footer-heading'>
          <span className='vertical'></span>
          <h2>Get In Touch</h2>
         </div> 
          <ul>
            <li><a href="/"><img src={Email} className="icon" alt="email" /> Email Us</a></li>
            <li><a href="/"><img src={Phone} className="icon" alt="email" /> Call Us</a></li>
          </ul>
          
        
          <img src={whatsapp}  className="social-icon" alt="whatsapp" />
          <img src={facebook}  className="social-icon" alt="whatsapp" />
          <img src={instagram} className="social-icon"  alt="whatsapp" />
          <img src={linkedin}  className="social-icon" alt="whatsapp" />
          
      </div>
  
    </div>



      <div className="footer_info">
        <hr className='hr'/>
        <p>Copyright &#169;
            <em>{" "}{ year} {" "} </em>
            <a href="https://www.assignmentcure.com/">Assignment Cure. </a>
            All Rights Reserved
        </p>

        
      </div>
      
    
    </div>
  );

}

export default Footer;