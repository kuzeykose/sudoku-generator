import React from 'react';
import '../App.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../components/constants/ItemTypes'
import Square from './Square'

//sayilari baska bir componente koyucaksin
//alinan sayiyi props name olarak buraya koyacaksin
// name ordan gelecek

function NumbersToCompiletSudoku() {
  return (
    <table className="table is-bordered column is-half">
      <Square number={"1"} />
      <Square number={"2"} />
      <Square number={"3"} />
      <Square number={"4"} />
      <Square number={"5"} />
      <Square number={"6"} />
      <Square number={"7"} />
      <Square number={"8"} />
      <Square number={"9"} />
    </table>
  )
}

export default NumbersToCompiletSudoku;