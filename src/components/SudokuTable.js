import React from 'react';
import '../App.css'
import TableSquares from '../components/TableSquares'
import NumbersToCompiletSudoku from '../components/NumbersToCompiletSudoku'

function SudokuTable(props) {
  return (
    <div className="table-container">
      <div class="table is-bordered ">
        <table class="column is-half">
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
        <NumbersToCompiletSudoku />
      </div >
    </div>
  )
}

export default SudokuTable;