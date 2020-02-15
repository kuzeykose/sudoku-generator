import React from 'react'
import '../App.css'

function Square(props){
  return(
    <div className="square">
      {props.value}
    </div>
  )
}
export default Square