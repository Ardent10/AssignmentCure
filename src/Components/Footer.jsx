import React from 'react';
import logo from "./assets/logo.png";
import Email from "./assets/email.png";
import Phone from "./assets/phone.png";
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
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Order Now</a></li>
            <li><a href="/">Blogs</a></li>
          </ul>
      </div>

      <div className="Register_a">
          <h2>Supports</h2>
          <ul>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Policies</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
      </div>

      <div className="Register_a">
          <h2>Get In Touch</h2>
          <ul>
            <li><a href="/"><img src={Email} className="icon" alt="email" /> Email Us</a></li>
            <li><a href="/"><img src={Phone} className="icon" alt="email" /> Call Us</a></li>
          </ul>
          
        
          <SocialIcon className='social-icon' fgColor="#fff" url="https://whatsapp.com/in" />
          <SocialIcon className='social-icon' fgColor="#fff" url="https://instagram.com/in" />
          <SocialIcon className='social-icon' fgColor="#fff" url="https://facebook.com/in" />
          <SocialIcon className='social-icon' fgColor="#fff" url="https://linkedin.com/in" />
          
      </div>
  
    </div>



      <div className="footer_info">
        <p>Copyright &#169;
            <em>{" "}{ year} {" "} </em>
            <a href="https://www.assignmentcure.com/">Assignment Cure </a>
            All Rights Reserved. 
        </p>

        
      </div>
      
    
    </div>
  );

}

export default Footer;