import React from 'react';
import '../App.css'
import TableSquares from '../components/TableSquares'

function SudokuTable(props) {
  return (
    <div class="table-container">
      <table class="table is-bordered">
        {props.sudoku.map((row, key) => {
          return (<tr> {row.map((number, key2) => {
            return (
              <TableSquares
                key={key2}
                numbers={number}
                sudoku={props.sudoku}
                changeNumberOnSudoku={props.changeNumberOnSudoku}
              />)
          })} </tr>)
        })}
      </table>
    </div >
  )
}

export default SudokuTable;