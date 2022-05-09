import React, {useState} from 'react'
import HeaderImages from './headerimages';
import { setApi } from '../../api/api';
import { Link } from 'react-router-dom';



const HeaderSearch = () => {

 const [images] = useState(setApi());
const [search, setSearch] = useState();
const [currentPage, setCurrentPage] = useState(1);
const [postPerPage] = useState(16);


const lastPost = currentPage * postPerPage;
const firstPost = lastPost - postPerPage;
const postData = images.slice(firstPost, lastPost)


//function for onclick event using bootstrap pagination
const paginate = (number) => setCurrentPage(number)

  return (
    <>
       
       <div className='categories'>

       <Link to="/comic" className='link'>
       <button className='category-button'>Comic</button>
       </Link>
    
    
       <Link to="/motivation" className='link'>
       <button className='category-button'>Motivation</button>
       </Link>
   
        <Link to="/salesbook" className='link'>
        <button className='category-button'>Sales</button>
        </Link>
      </div>

    <div className='container header-search' style={{marginBottom: '1%'}}>
  
    <form className="form" >
     <input className="form-control w-50" type="text"
      placeholder="Search" aria-label="Search" 
      //getting the value of input change stored in search state hook
      onChange={(e) => setSearch(e.target.value)}/> 
   
         </form>

         <div className='random-books'>
          <p>Books for Thought</p>
         </div>
         </div>


     <HeaderImages images={postData}
     items={images}
     search={search}
     postPerPage={postPerPage}
     totalImages={images.length} 
     paginate={paginate}
    currentPage={currentPage}/>   
   </>
    
  )
}

export default HeaderSearch;