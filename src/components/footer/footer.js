import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
    
    <div className='container footer-container'>
      <div className='footer-one'>
       <h3>Ready To Learn? <br/> Talk to us Today..
       <button className='footer-button'>Get Started</button>
       </h3>
      <div className='footer-two'>
        <p>CONTACT US : lorem ipsum</p>
        <p>EMAIL : lorem ipsum</p>
        <p>FACEBOOK PAGE : lorem ipsum</p>
        <p>INSTAGRAM PAGE : lorem ipsum</p>


        <div className='footer-input'>
        <label>SUBSCRIBE NOW</label> <br/> <br/>
        <input className='input' type="text" size="50" placeholder='email' />
        <input className='input-button' type="button" value="submit"/>
        </div>
     
      </div>
       </div>
    </div> 
    
   
    </>
   
  )
}

export default Footer