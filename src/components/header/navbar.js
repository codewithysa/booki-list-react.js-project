import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>


    <nav className="navbar navbar-expand-lg">
    <div className="container">
    <div className='navbar-brand'>
      <Link to='/'>
      <a>SoftBook</a>
      </Link>

    </div>
   </div>
   </nav>

    
    </>
  )
}

export default Navbar;