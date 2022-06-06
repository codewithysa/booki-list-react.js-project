import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../../BooksRoute/booksroute.css';
import { setSales } from '../../../api/api';
import {SalePaginate} from './salePaginate';

export const SalesBook = () => {
  const [sale] = useState(setSales());
  const [postPerPage] = useState(12);
  const [page, setPage] = useState(1)

  const saleStart = postPerPage * page;
  const saleEnd = saleStart - postPerPage;
  const salesItem = sale.slice(saleEnd, saleStart)

  const salesPaginate = (num) => setPage(num);

  const history = useHistory();

  const imageClick = (title, category) => {
    history.push({
      pathname: '/datacontainer', 
      state: {title: title, category: category}
    })
   }

  console.log(sale)
  return (
    <>
  
  <div style={{backgroundImage: 'linear-gradient(to right, rgb(77, 113, 22),  black, rgb(77, 113, 22))', height: '100vh'}}>

<div style={{paddingLeft: '60px', paddingTop: '5%'}}>
<button className="back-button" onClick={() => history.goBack()}>Back</button>
</div>


<div className='book-container'>

<div className='book-items'>

{salesItem.map((data) => (
<div>
<img src={data.src} onClick={() => imageClick(data.title, data.category)}className="book-image" alt="motivation"/>
</div>

))}


</div>

</div>

<div className='book-paginate'>
<SalePaginate salesPaginate={salesPaginate}
postPerPage={postPerPage}
items={sale.length}
/>

</div>

</div>
  
    </>
    

  )
}
