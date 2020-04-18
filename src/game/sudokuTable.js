import React from 'react';
import '../App.css'

function sudokuTable(props) {
  return (
    <div>
      {props.sudoku.map((row, key) => {
        return (<tr> {row.map((number, key2) => {
          return (<th> {number} </th>)
        })} </tr>)
      })}
    </div>
  )
}

export default sudokuTable;