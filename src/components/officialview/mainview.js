import React from 'react';
import './mainview.css';
import Navbar from '../header/navbar';
import HeaderContent from '../mainheader/headerContent';
import HeaderCarousel from '../mainheader/headercarousel';
import Footer from '../footer/footer';


const Mainview = () => {
  return (
    <>
     <div className='mainview'>
     <Navbar/>
     <HeaderContent/>
     <HeaderCarousel/>
  
  

    
     </div> 
  
   
    </>
    
  )
}

export default Mainview;