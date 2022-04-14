import React from 'react';
import './mainview.css';
import Navbar from '../header/navbar';
import HeaderContent from '../mainsection/headerContent';
import HeaderSearch from '../mainsection/headersearch';
import Footer from '../footer/footer';



const Mainview = () => {
  return (
    <>
     <div className='mainview'>
     <Navbar/>
     <HeaderContent/>
     <HeaderSearch/>
     <Footer/>
   
     </div> 
   
    </>
    
  )
}

export default Mainview;