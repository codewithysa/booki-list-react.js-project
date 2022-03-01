import React from 'react';
import './mainheader.css';


const HeaderCarousel = () => {
   const images = [
     {src: './comicbooks/comic.jpg'},
     {src: './sales/sales1.jpg'},
     {src: './motivation/book2.jpg'},
     {src: './comicbooks/comic4.jpg'},
     {src: './sales/sales3.jpg'},
     {src: './motivation/book1.png'},
     {src: './comicbooks/comic2.jpg'},
     {src: './motivation/book4.jpg'},
     {src: './sales/sales6.jpg'},
     {src: './motivation/book1.png'},
     {src: './comicbooks/comic3.jpg'},
     {src: './motivation/book3.jpg'},
     {src: './sales/sales5.jpeg'},
     {src: './comicbooks/comic5.jpg'},
     {src: './motivation/book5.jpg'},
  
    
   ]
 

  return (
      <>
      <div className='container'>
        <div className='random-books'>
          <p>Random Books</p>
        </div>
      <div className='header-carousel'>
       <div className='image-container'>
         {images.map((e) => (
         
             <div className='image'>
              <img  src={e.src} alt="e"/>
              </div>
         
         ))}
           </div> 
       </div>
      </div>
     
      
      </>
   
  )
}



export default HeaderCarousel;