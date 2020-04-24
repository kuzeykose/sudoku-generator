import React from 'react';
import '../App.css'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './constants/ItemTypes'

function SudokuTable(props) {

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.one,
    drop: (item, monitor) => console.log(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })


  return (
    <div >
      {props.sudoku.map((row, key) => {
        return (<div> {row.map((number, key2) => {
          return (<div ref={drop}>{number}</div>)
        })} </div>)
      })}
      <div >drop here</div>
    </div>

  )
}

export default SudokuTable;