import React from 'react';

export const SalePaginate = ({salesPaginate, items, postPerPage}) => {

  const salesData = [];

  for(let i = 1; i <= Math.ceil(items / postPerPage); i++){
    salesData.push(i);
  }

  return (
    <>
    <nav style={{paddingBottom: '2%'}}>
         <ul className="pagination pagination-sm">
          {salesData.map((num) => (

           <li className='page-item'>
           <a className='page-link' onClick={() => salesPaginate(num)}>{num}</a>
           </li>
          ))}

         </ul>
     </nav>
    </>
 
  )
}
