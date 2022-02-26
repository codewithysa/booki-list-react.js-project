import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
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
          <a className="nav-link active" aria-current="page" href="#">MOTIVATIONAL BOOKS</a>
        </li>
        <li className="nav-item mx-5"> 
          <a className="nav-link" href="#">SALES BOOKS</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link" href="#">COMIC BOOKS</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;