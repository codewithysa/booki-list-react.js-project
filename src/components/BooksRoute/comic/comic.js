import React, {useState} from 'react';
import './comic.css';
import { setComic } from '../../../api/api';
import { ComicPaginate } from './comicpaginate';
import {useHistory} from 'react-router-dom';


export const Comic = () => {


const [comicBooks] = useState(setComic());
const [comicPerPage] = useState(12);
const [comicPage, setComicPage] = useState(1);



const comicEnd = comicPerPage * comicPage;
const comicStart = comicEnd - comicPerPage;
const comicData = comicBooks.slice(comicStart, comicEnd)

//function for pagination number 
const comicPaginate = (num) => setComicPage(num)

const history = useHistory();

//function for onclick comic image
 const imageClick = (value, category) => {
  history.push({
    pathname: '/datacontainer', 
    state: {title: value, category: category}
  })
 }


  return (
    <>
     <div style={{backgroundImage: 'linear-gradient(to right,  rgb(77, 113, 22),  black, rgb(77, 113, 22)', paddingBottom: '5px'}}>
          
        <div style={{paddingLeft: '60px', paddingTop: '5%'}}>
         <button className="comic-button"onClick={() => history.goBack()}>Back</button>
        </div>
     
        <div className="comic">  

         <div className='comic-container'>
         {comicData.map((c) => (
          <div className="comics" >
  
           <img src={c.src}className="comic-image" onClick={() => imageClick(c.title, c.category)} alt="comic" />
    
          
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
