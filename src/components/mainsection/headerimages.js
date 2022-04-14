import React,{useState} from 'react';
import './mainsection.css';
import {HeaderPagination} from '../mainsection/headerpagination';
import {useHistory} from 'react-router-dom';






const HeaderImages = ({images, search, postPerPage, totalImages, paginate, currentPage, items}) => {
const [id, setId] = useState("comicbook");
  const history = useHistory();


  const imageClick = (x) => {
    if(x === 'comicbooks'){
      history.push('/comic');
    }else if(x === 'motivation'){
      history.push('/motivation');
    }else if(x === 'sales'){
      history.push('/salesbook');
    }
  };

 

  
  return (
      <>

     {!search ? (
        <div className='container' style={{paddingBottom: '5%'}}>
        <div className='header-images'>
          
           <div className='image-container'>
     
           {images.map((e, id) => (
            
            <div key={id} className='image'>
             <img className='images' src={e.src} onClick={() => imageClick(e.category)} alt="e"/>
             </div>
               
             ))}
     
          </div> 
        </div>

        <HeaderPagination totalItem={totalImages}
         postPerPage={postPerPage} paginate={paginate}
         currentPage={currentPage}/>

       </div>
        
     ) : (items.filter((value) => {
        return value.title.includes(search.toLowerCase())
            
        }).map((val) => (
          
             <div className='item-search'>
             <img src={val.src} className="images" alt="image"/>
             </div>
          )))}

  
      </>
   
  )
}



export default HeaderImages;

