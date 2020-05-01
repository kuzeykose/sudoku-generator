import React from 'react';
import '../App.css'
import SudokuTable from "../components/SudokuTable";
import './SudokuGenerator.js'
import sudokuGenerator from './SudokuGenerator.js';
import DifficultyButtons from '../components/DifficultyButtons'
import NumbersToCompiletSudoku from '../components/NumbersToCompiletSudoku'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import RemoveItemsFromSudoku from "./RemoveItemsFromSudoku";

class SudokuGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sudoku: []
    }
  }

  // generete sudoku with the game mod -> easy-medium-hard
  genereteSudoku = (index) => {
    var removeItemsFromSudoku = new RemoveItemsFromSudoku()
    var generate = removeItemsFromSudoku.createSudokuAndCreateSpace(index)
    this.setState({ sudoku: generate })
  }

  changeNumberOnSudoku = (item, monitor) => {
    var sudokuFill = this.state.sudoku
    var myDropId = monitor.targetId
    var myPosition = parseInt(myDropId.split("").splice(1, 3).join(""))
    var myPositionObject = {
      first: Math.floor(myPosition / 9) - 1,
      second: myPosition % 9
    }
    this.fillSudokuWhichNumberIsOkey(myPositionObject.first, myPositionObject.second, parseInt(item.number), sudokuFill)
  }

  fillSudokuWhichNumberIsOkey = (row, column, item, sudoku) => {
    var sudokuCheck = new sudokuGenerator()
    var boxCheck = sudokuCheck.checkBox(row, column, item, sudoku)
    var rowCheck = sudokuCheck.checkRow(row, item, sudoku)
    var columnCheck = sudokuCheck.checkColumn(column, item, sudoku)

    if (sudoku[row][column] === null && boxCheck && rowCheck && columnCheck) {
      sudoku[row][column] = item
      this.setState({ sudoku: sudoku })
    }
  }

  render() {
    return (
      <div>
        <DndProvider backend={Backend}>
          <SudokuTable sudoku={this.state.sudoku} changeNumberOnSudoku={this.changeNumberOnSudoku} />
          <NumbersToCompiletSudoku />
          <DifficultyButtons gameModDifficulty={this.genereteSudoku} />
        </DndProvider>
      </div>
    );
  }
}
export default SudokuGame;