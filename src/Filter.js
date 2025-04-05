import React, { useContext } from 'react'
import { CityContext } from './CityContext'

export default function Filter() {
    // get state from context
    const {city,dispatch}=useContext(CityContext);
     
    // handle event :click enter
    const handleKeyDown=(e)=>{
        if (e.key === "Enter") {
            dispatch({type:'FILTERCITY',payload:e.target.value})
        }    
        
    }


    return (
        <div>
          
          <input placeholder='search for cities' className='filterCity' value={city}  onKeyDown={handleKeyDown}/>
       </div>
  
  )
}
