import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <div className='navbar-brand ms-5'>
    <a href="#">SoftBook</a>
    </div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className=" navbar-collapse collapse " id="navbarNav">
    
      <ul className="navbar-nav ">
        <li className="nav-item mx-5">
          <Link className="nav-link active" aria-current="page" to="/motivationbook">MOTIVATIONAL BOOKS</Link>
        </li>
        <li className="nav-item mx-5"> 
          <Link className="nav-link" to="/sales">SALES BOOKS</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link" to="/comic">COMIC BOOKS</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;