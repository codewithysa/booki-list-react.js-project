import React from 'react'

export const ComicPaginate = ({comicItemCount, comicPerPage, comicPaginate, comicPage}) => {

 const comicNumbers = []

 for(let i = 1; i <= Math.ceil(comicItemCount / comicPerPage); i++){
   comicNumbers.push(i)
 }

  return (
    <>
     <nav>
       <ul className="pagination pagination-sm">
         {comicNumbers.map((num) => (
           
           <li className={num == comicPage ? "page-item active" : "page-item"}>
           <a onClick={() => comicPaginate(num)}className="page-link">{num}</a>
           </li>

         ))}
         
        </ul>
        </nav>
    </>
  )
}
