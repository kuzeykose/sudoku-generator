import React from 'react';
import '../App.css'
import './SudokuGenerator.js'
import sudokuGenerator from './SudokuGenerator.js';

class RemoveItemsFromSudoku extends React.Component {
  // generete sudoku using SudokuGenerator class
  // with the game mod -> easy-medium-hard
  //index comming from buttons in SudokuGame witch select the mod
  createSudokuAndCreateSpace = (index) => {
    var emitySudoku = new sudokuGenerator()
    var sudokuWithoutSpace = emitySudoku.fillMySudoku()
    var sudoku = this.gameModDifficulty(index, sudokuWithoutSpace)
    return sudoku
  }

  //take the index of button the arrange game mod { easy->46 space / medium->53 space / hard->56 space}
  gameModDifficulty = (index, sudokuWithoutSpace) => {
    switch (index) {
      case 0:
        console.log('easy');
        return this.removeItemsFromSudoku(46, sudokuWithoutSpace)
      case 1:
        console.log('medium');
        return this.removeItemsFromSudoku(53, sudokuWithoutSpace)
      case 2:
        console.log('hard');
        return this.removeItemsFromSudoku(56, sudokuWithoutSpace)
    }
  }

  //remove items form table which choosen by users selected mod
  removeItemsFromSudoku = (spaceNumber, sudoku) => {
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
      sudoku[number[0]][number[1]] = null
    }
    return sudoku
  }
}
export default RemoveItemsFromSudoku;