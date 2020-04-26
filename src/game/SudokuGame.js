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

  // generete sudoku with the game mod -> easy-medium-hard
  genereteSudoku = (index) => {
    var sudokuGame = new sudokuGenerator()
    var sudoku = sudokuGame.fillMySudoku()
    this.gameModDifficulty(index, sudoku)
  }

  //take the index of button the arrange game mod { easy->46 space / medium->53 space / hard->56 space}
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

  //remove items form table which choosen by users selected mod
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

  // taking dropzone targertId 
  // change 0-81 number index to 2d matrix index 
  // {first item is divided 9 for column index, second item is mod 9 for row index }
  changeNumberOnSudoku = (item, monitor) => {
    var sudokuFill = this.state.sudoku
    var myDropId = monitor.targetId
    var myPosition = parseInt(myDropId.split("").splice(1, 3).join(""))
    var myPositionObject = {
      first: Math.floor(myPosition / 9) - 1,
      second: myPosition % 9
    }
    sudokuFill[myPositionObject.first][myPositionObject.second] = parseInt(item.number)
    this.setState({ sudoku: sudokuFill })
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