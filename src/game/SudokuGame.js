import React from 'react';
import '../App.css'
import SudokuTable from "../components/SudokuTable";
import './sudokuGenerator.js'
import sudokuGenerator from './sudokuGenerator.js';
import DifficultyButtons from '../components/DifficultyButtons'
import NumbersToCompiletSudoku from '../components/NumbersToCompiletSudoku'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

class SudokuGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sudoku: []
    }
  }

  genereteSudoku = (index) => {
    var sudokuGame = new sudokuGenerator()
    var sudoku = sudokuGame.fillMySudoku()
    this.gameModDifficulty(index, sudoku)
  }

  gameModDifficulty = (index, sudoku) => {
    switch (index) {
      case 0:
        console.log('easy');
        this.removeItemsFromSudoku(46, sudoku)
        break
      case 1:
        console.log('medium');
        this.removeItemsFromSudoku(53, sudoku)
        break
      case 2:
        console.log('hard');
        this.removeItemsFromSudoku(56, sudoku)
        break
    }
  }

  removeItemsFromSudoku = (spaceNumber, sudokuwWithSpace) => {
    var myNumbers = []
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        var number1 = i
        var number2 = j
        myNumbers.push(number1.toString() + number2.toString())
      }
    }
    for (let t = 0; t < spaceNumber; t++) {
      var genereteRandomNumber = Math.floor(Math.random() * myNumbers.length)
      var number = myNumbers[genereteRandomNumber]
      number.split('')
      myNumbers.splice(genereteRandomNumber, 1)
      sudokuwWithSpace[number[0]][number[1]] = null
    }
    this.setState({ sudoku: sudokuwWithSpace })
  }


  render() {
    return (
      <div>
        <DndProvider backend={Backend}>
          <SudokuTable sudoku={this.state.sudoku} />
          <NumbersToCompiletSudoku />
          <DifficultyButtons gameModDifficulty={this.genereteSudoku} />
        </DndProvider>
      </div>
    );
  }
}
export default SudokuGame;