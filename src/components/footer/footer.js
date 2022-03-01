import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
     <div className='footer'>
       <div className='footer-content1'>
         <div>
         <p>CONTACT US : lorem ipsum <br/>
         EMAIL : lorem ipsum <br/> <br/>
         FOLLOW US ON:<br/>
         FACEBOOK : lorem ipsum <br/>
         INSTAGRAM : lorem ipsum
        </p>
      
         </div>
         </div>
       
       <div className='footer-content2'>
         <div className='footer-input'>
           <label className='input-label'>subscribe now</label>
           <br/> <br/>
           <input className='email' type="email" size="50"/>
           <input className='submit' type="button" value="submit" />
         </div>
       </div>

       <div className='footer-logo'>
        <h1>SoftBook</h1>
       </div>
    </div> 
    
   
    </>
   
  )
}

export default Footer