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
        console.log('easy'); break //delete 43 item
      case 1:
        console.log('medium'); break //delete 51 item
      case 2:
        console.log('hard'); break //delete 56
      default:
        break;
    }
  }

  removeItemsFromSudoku = () => {

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
