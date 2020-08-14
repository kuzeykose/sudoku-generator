import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './constants/ItemTypes'

const Square = ({ number }) => {

  const [{ isDragging }, drag] = useDrag({
    item: { number, type: ItemTypes.Number },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <td ref={drag}>
      {number}
    </td>
  )
}
export default Square
