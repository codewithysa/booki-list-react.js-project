import React from 'react';
import './mainview.css';
import Navbar from '../header/navbar';
import HeaderContent from '../mainheader/headerContent';
import Footer from '../footer/footer';


const Mainview = () => {
  return (
    <>
     <div className='mainview'>
     <Navbar/>
     <HeaderContent/>
    <div style={{paddingTop: '200px'}}>
    <Footer/>
    </div>
    
     </div> 
  
   
    </>
    
  )
}

export default Mainview;