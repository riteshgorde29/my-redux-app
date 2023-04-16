import React from 'react'
import {connect} from 'react-redux'

let C = (props) => {
  return (
    <div>
        <h1> C</h1>
        <h2> Name :{props.name}</h2>
        <h2> Location:{props.loc}</h2>
    </div>
  )
}
C=connect(
  (state)=>{
    const {loc,name}=state.appReducer
    return {
 name,loc
    }
  }
)(C)

export default C