import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
 



    <div className='container footers' style={{paddingBottom: '60px', paddingTop: '40px'}}>
     <div className='footer-container' style={{display: 'flex', justifyContent: 'center'}}>

     <div className='footer-content'>
          <ul>
            <li>
              <a href='#'>Contact us: Lorem ipsum</a>
            </li>
            <li>
              <a href='#'>Email us: Lorem ipsum</a>
            </li>
            <li>
              <br/>
              <p>Follow us on:</p>
              <a className='footer-link' href='#'>Facebook: Lorem ipsum</a>
            </li>
            <li>
              <a  className='footer-link'href='#'>Instagram: Lorem ipsum</a>
            </li>
          </ul>

        </div>

          <div className='footer-content2'>
           <div className='input-container'>
           <label className='footer-label'>Subscribe now..</label> <br/> <br/>
           <input className="footer-input"type="email" placeholder='email' size="40"/>
           <button className='input-button'>submit</button>
           </div>
           </div>

            <div className='footer-content3'>
             <div className='footer-brand'>
               <p>SOFTBOOK</p>
             </div>
           </div>
           
       
     </div>
       
      </div>

    
    </>
   
  )
}

export default Footer

