import React from 'react';
import '../App.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../components/constants/ItemTypes'

function NumbersToCompiletSudoku() {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.one
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div>
      <p ref={drag}>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
    </div>
  )
}

export default NumbersToCompiletSudoku;