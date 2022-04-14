import React from 'react';
import './mainsection.css';


export const HeaderPagination = ({totalItem, postPerPage, paginate, currentPage}) => {

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItem / postPerPage); i++){
    pageNumbers.push(i)
  }

  return (
   <>
        <nav style={{marginTop: '10px'}}>
       <ul className="pagination pagination-sm">
         {pageNumbers.map((num, index) => (
          <li key={index} className={num == currentPage ? "page-item active" : "page-item"}>
          <a onClick={() => paginate(num)} className="page-link">{num}</a></li>
         ))}
       
        </ul>
        </nav>
      
   </>
  )
}
