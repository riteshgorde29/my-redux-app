import React, { useRef } from 'react'
import appstore from './store'

const B = () => {
   const locRef=useRef()
   const fnClick =()=> {
    const loc=locRef.current.value;
    appstore.dispatch({
      type:"LOC_UPDATE",
      payload:loc

      }
    )
   
   }
  return (
    <div> 
           <h1>B</h1>
    <p>
        Location:<input ref={locRef} />
    </p>
    <button onClick={fnClick}> submit:</button>
    </div>
  )
}

export default B
