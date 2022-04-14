import React, {useState} from 'react';
import { setApi } from '../../../api/api';

const Image = () => {
    const [imageClick, setImageClick] = useState(setApi);
    
    
  return (
    <>
    <div>imageclick</div>
    {imageClick.map((i) => (
         <div className='container'>{i.id}</div>
    ))}
   
    </>
  )
}

export default Image