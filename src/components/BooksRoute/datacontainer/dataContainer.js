import React, {useState} from 'react';
import './datacontainer.css';
import { useLocation } from 'react-router-dom';
import { setApi } from '../../../api/api';
import { useHistory } from 'react-router-dom';


export const DataContainer = () => {
const location = useLocation();
const history = useHistory();

const [api] = useState(setApi());
const [value] = useState(location.state);


  return (
     <>
     <div style={{backgroundColor: 'rgb(0,46,0)', height: ' 100vh'}}>

   <div className='container' >

   <button className='button' onClick={() => history.goBack()}>Back</button>
  


    {/* to render the data of onclick image from headerimage component and other components */}
    {api.filter((api) => {
     return api.title.includes(value.title)
    }).map((value) => (
   <>

   <div style={{marginTop: '8%'}}>

   {/* to make every first letter of word title capitalize */}
   <h1 className='title'>{value.title.split(' ').map((word) => {
    return word[0].toUpperCase() + word.substring(1);
   }).join(' ')} </h1>

   </div>

  
      <div style={{ display: 'flex', paddingBottom: '50px'}}>
         {/* to render image  */}
        <div>
        <img src={value.src} className="chosen-image" alt='clickImage'/>
        </div>
     
         <div className='story'>
         <div style={{padding: '5px 100px 5px', color: 'white'}}>
         <h3>Lorem Ipsum</h3>
         <p className='story-words'>{value.story}</p>
        </div>
         </div>

       </div>
  
        </>

       ))}

    </div>

     </div>
    
     </>
  )
}
