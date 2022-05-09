import React, {useState} from 'react';
import './motivation.css'
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

  return (
     <>
  
    
      <div style={{backgroundImage: 'linear-gradient(to right, rgb(77, 113, 22),  black, rgb(77, 113, 22))'}}>

      <div style={{paddingLeft: '60px', paddingTop: '5%'}}>
      <button className="motiv-button" onClick={() => history.goBack()}>Back</button>
      </div>
    

    <div className='motivation'>

    <div className='motiv-container'>

    {motivationData.map((data) => (
     <div>
    <img src={data.src} className="motiv-image" alt="motivation"/>
    </div>

    ))}


    </div>

    </div>
 

      <MotivPaginate totalItem={motivation.length}
      postPerPage={postPerPage}
      page={page}
      motivPaginate={motivPaginate}
     /> 


  
    </div>
   
   

    </>
   
  )
}
