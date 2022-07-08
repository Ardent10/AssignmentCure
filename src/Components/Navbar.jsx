import React from 'react'
import "./css/Navbar.css";
import logo from "./assets/logo.png";


const Navbar = () => {
  return (
    <div>

    <nav class="navbar sticky-top  navbar-expand-lg py-2">
    
    <div class="container-fluid px-lg-5 px-sm-2">
      <a class="navbar-brand" href="/"><img className='logo' src={logo} alt="assignmentcure-logo" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 gap-sm-1">
          
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>

        </ul>
        
        <button type="button" class="hire-btn btn">Get A Quote</button>
        <button type="button" class="btn login-btn">Login</button>
        
      </div>
    </div>
    </nav>
    </div>
  )
}

export default Navbar;