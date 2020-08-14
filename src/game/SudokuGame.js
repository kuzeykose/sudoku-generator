import React from 'react';
import '../App.css'
import SudokuTable from "../components/SudokuTable";
import './SudokuGenerator.js'
import DifficultyButtons from '../components/DifficultyButtons'
import NumbersToCompiletSudoku from '../components/NumbersToCompiletSudoku'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import RemoveItemsFromSudoku from "./RemoveItemsFromSudoku";
import SudokuSolver from "./SudokuSolver";

class SudokuGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sudoku: [],
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
    var number = new SudokuSolver()

    if (sudoku[row][column] === null && number.isValid(sudoku, row, column, item)) {
      sudoku[row][column] = item
      this.setState({ sudoku: sudoku })
    }
  }

  solveMySudoku = () => {
    var sudoku = this.state.sudoku
    var solution = new SudokuSolver()
    var solved = solution.solveMySudoku(sudoku)
    this.setState({ sudoku: solved })
  }

  render() {
    return (
      <div className="container">
        <DndProvider backend={Backend}>
          <div className="columns is-centered">
            <SudokuTable sudoku={this.state.sudoku} changeNumberOnSudoku={this.changeNumberOnSudoku} />
          </div>
          <DifficultyButtons gameModDifficulty={this.genereteSudoku} />
        </DndProvider>
        <button onClick={() => this.solveMySudoku()}></button>
      </div>
    );
  }
}
export default SudokuGame;