import React, {useState} from 'react';
import '../../BooksRoute/booksroute.css';
import { setMotivation } from '../../../api/api';
import { useHistory } from 'react-router-dom';
import { MotivPaginate } from './motivpaginate';


export const Motivation = () => {

  const history = useHistory();

  const [motivation] = useState(setMotivation());
  const [postPerPage] = useState(12);
  const [page, setPage] = useState(1);

  const dataEnd = postPerPage * page; // 12
  const dataFirst = dataEnd - postPerPage; // 0
  const motivationData = motivation.slice(dataFirst, dataEnd)

  const motivPaginate = (num) => setPage(num);

  const imageClick = (title, category) => {
    history.push({
      pathname: '/datacontainer', 
      state: {title: title, category: category}
    })
   }

  return (
     <>
  
    
      <div style={{backgroundImage: 'linear-gradient(to right, rgb(77, 113, 22),  black, rgb(77, 113, 22))', height: '100vh'}}>

      <div style={{paddingLeft: '60px', paddingTop: '5%'}}>
      <button className="back-button" onClick={() => history.goBack()}>Back</button>
      </div>
    

    <div className='book-container'>

    <div className='book-items'>

    {motivationData.map((data) => (
     <div>
    <img src={data.src} onClick={() => imageClick(data.title, data.category)} className="book-image" alt="motivation"/>
    </div>

    ))}


    </div>

    </div>
 
   <div className='book-paginate'>
   <MotivPaginate totalItem={motivation.length}
      postPerPage={postPerPage}
      page={page}
      motivPaginate={motivPaginate}
     /> 
   </div>
   


  
    </div>
   
   

    </>
   
  )
}
