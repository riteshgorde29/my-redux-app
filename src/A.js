import React, { useRef } from 'react'
import appstore from './store'

const A = () => {
     const nameRef=useRef()
 const fnClick=()=>{
  const name=nameRef.current.value;  
    appstore.dispatch({
     type:"NAME_UPDATE",
      payload:name
    })
  
 }
  return (
    <div> <h1>A</h1>
    <p> Name: <input ref={nameRef}/> </p>
   <button onClick={fnClick}> submit:</button>

    </div>
  )
}

export default A
