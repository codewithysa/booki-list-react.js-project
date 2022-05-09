import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './salesbook.css';
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

  console.log(sale)
  return (
    <>
  
  <div style={{backgroundImage: 'linear-gradient(to right, rgb(77, 113, 22),  black, rgb(77, 113, 22))'}}>

<div style={{paddingLeft: '60px', paddingTop: '5%'}}>
<button className="sales-button" onClick={() => history.goBack()}>Back</button>
</div>


<div className='sales'>

<div className='sales-container'>

{salesItem.map((data) => (
<div>
<img src={data.src} className="sales-image" alt="motivation"/>
</div>

))}


</div>

</div>

<SalePaginate salesPaginate={salesPaginate}
postPerPage={postPerPage}
items={sale.length}
/>

</div>
  
    </>
    

  )
}
