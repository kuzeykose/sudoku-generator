import React from 'react';
import '../App.css'
import SudokuTable from "./sudokuTable";
import './sudokuGenerator.js'
import sudokuGenerator from './sudokuGenerator.js';
import DifficultyButtons from '../components/DifficultyButtons'

class SudokuGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sudoku: []
    }
  }

  componentDidMount() {
    var sudokuGame = new sudokuGenerator()
    var sudoku = sudokuGame.fillMySudoku()
    this.setState({ sudoku: sudoku })
  }

  genereteSudoku = () => {
    var sudokuGame = new sudokuGenerator()
    var sudoku = sudokuGame.fillMySudoku()
    console.log(sudoku);
  }

  gameModDifficulty = (index) => {
    switch (index) {
      case 0:
        console.log('easy');
        this.removeItemsFromSudoku(46)
        break
      case 1:
        console.log('medium');
        this.removeItemsFromSudoku(53)
        break
      case 2:
        console.log('hard');
        this.removeItemsFromSudoku(56)
        break
      default:
        break;
    }
  }

  removeItemsFromSudoku = (spaceNumber) => {
    var sudokuWithSpace = this.state.sudoku
    for (let i = 0; i < spaceNumber; i++) {
      var number1 = Math.floor(Math.random() * 9)
      var number2 = Math.floor(Math.random() * 9)
      sudokuWithSpace[number1][number2] = null
    }
    this.setState({ sudoku: sudokuWithSpace })
  }

  render() {
    return (
      <div>
        <SudokuTable sudoku={this.state.sudoku} />
        <DifficultyButtons gameModDifficulty={this.gameModDifficulty} />
      </div>
    );
  }
}
export default SudokuGame;