import React from 'react';
import './mainsection.css';
import {HeaderPagination} from '../mainsection/headerpagination';
import {useHistory} from 'react-router-dom';




const HeaderImages = ({images, search, postPerPage, totalImages, paginate, currentPage, items}) => {
const history = useHistory();



//function for onclick image 
 const imageClick = (value, category) => {
  history.push({
    pathname: '/datacontainer', 
    state: {title: value, category: category}
  })
 }



// function for search item
 const filterSearch = () => (
  items.filter((value) => {
    return value.title.includes(search.toLowerCase())
 
    }).map((val) => (
      
      <div className='item-search'>
      <img src={val.src} className="images" alt="image" onClick={() => imageClick(val.title, val.category)}/>
      </div>
      ))
 )


  return (
      <>

     {!search ? (
        <div className='container' style={{paddingBottom: '5%'}}>
        <div className='header-images' >
          
           <div className='image-container'>
     
           {images.map((e, id) => (
            
            <div key={id} className='image' style={{paddingLeft: '5px'}}>
             <img className='images' src={e.src} onClick={() => imageClick(e.title, e.category)} alt="e"/>
             </div>
               
             ))}
     
          </div> 
        </div>

        <HeaderPagination totalItem={totalImages}
         postPerPage={postPerPage} paginate={paginate}
         currentPage={currentPage}/>

       </div>
        
     ) : filterSearch()}
  
      </>
    
  )
}



export default HeaderImages;

