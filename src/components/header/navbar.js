import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg mb-3">
  <div className="container">
    <div className='navbar-brand ms-5'>
    <a href="#">SoftBook</a>
    </div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
   <div className=" navbar-collapse collapse" id="navbarNav">
    
    <ul className="navbar-nav">
    <li className="nav-item">
        Sign in
      </li>
    </ul> 
    
  </div>
</nav>
    </>
  )
}

export default Navbar;