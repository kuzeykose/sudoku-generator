import React from 'react';
import '../App.css'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './constants/ItemTypes'

// secilebilir sayilar
function TableSquares({ numbers, sudoku, key, changeNumberOnSudoku }) {

  // const changeNumberOnSudoku = (item, monitor) => {
  //   var myDropId = monitor.targetId
  //   var myPosition = parseInt(myDropId.split("").splice(1, 3).join(""))
  //   var myPositionObject = {
  //     first: Math.floor(myPosition / 9) - 1,
  //     second: myPosition % 9
  //   }
  //   sudoku[myPositionObject.first][myPositionObject.second] = parseInt(item.number)
  // }

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.Number,
    drop: (item, monitor) => changeNumberOnSudoku(item, monitor),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <td ref={drop}>
      {numbers}
    </td>
  )
}

export default TableSquares;