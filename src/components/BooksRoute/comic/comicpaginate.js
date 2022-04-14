import React from 'react'

export const ComicPaginate = ({comicItemCount, comicPerPage, comicPage, comicPaginate}) => {

 const comicNumbers = []

 for(let i = 1; i <= Math.ceil(comicItemCount / comicPerPage); i++){
   comicNumbers.push(i)
 }

  return (
    <>
     <nav>
       <ul className="pagination pagination-sm">
         {comicNumbers.map((num) => (
           
           <li className="page-item">
           <a onClick={() => comicPaginate(num)}className="page-link">{num}</a>
           </li>

         ))}
         
        </ul>
        </nav>
    </>
  )
}
