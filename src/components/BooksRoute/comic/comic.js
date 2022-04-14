import React, {useState, useEffect} from 'react';
import './comic.css';
import { Link , } from 'react-router-dom';
import { setComic } from '../../../api/api';
import { ComicPaginate } from './comicpaginate';


export const Comic = () => {


const [comicBooks] = useState(setComic());
const [comicPerPage, setComicPerPage] = useState(12);
const [comicPage, setComicPage] = useState(1);



const comicEnd = comicPerPage * comicPage;
const comicStart = comicEnd - comicPerPage;
const comicData = comicBooks.slice(comicStart, comicEnd)

const comicPaginate = (num) => setComicPage(num)




  return (
    <>
     <div style={{backgroundImage: 'linear-gradient(to right,  rgb(77, 113, 22),  black, rgb(77, 113, 22)', paddingBottom: '5px'}}>
          
       <div style={{paddingLeft: '60px', paddingTop: '5%'}}>
         <button style={{padding: '2px 20px 2px', borderRadius: '5px', backgroundColor: 'yellow'}}>
         <Link to="/" style={{textDecoration: 'none'}}>Back</Link>
         </button>
       
        </div>
     
        <div className="comic">

         <div className='comic-container'>
         {comicData.map((c) => (
          <div className="comics" >
  
           <img src={c.src}className="comic-image" alt="comic"/>
    
          
          </div>
         ))}
         </div>
      
     </div>
    
       <div className='comic-paginate'>
         <ComicPaginate comicItemCount={comicBooks.length}
         comicPage={comicPage}
         comicPerPage={comicPerPage}
         comicPaginate={comicPaginate}
         />
         </div>
        
 
     </div>
    

    </>
   
  )
}
