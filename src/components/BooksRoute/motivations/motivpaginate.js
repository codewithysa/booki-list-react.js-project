import React from 'react';

export const MotivPaginate = ({totalItem, postPerPage, motivPaginate, page}) => {

const motivNumbers = [];

for(let i = 1; i <= Math.ceil(totalItem / postPerPage); i++){
    motivNumbers.push(i)
}

  return (

    <>
     <nav style={{paddingBottom: '2%'}}>
         <ul className="pagination pagination-sm">
             {motivNumbers.map((num) => (

             <li className={num == page ? "page-item active" : "page-item"}>
             <a onClick={() => motivPaginate(num)} className='page-link'>{num}</a>
             </li>

             ))}
         </ul>
     </nav>
    </>
   
  )
}
