import React, { Component } from 'react'

class SudokuSolver extends React.Component {

  solveMySudoku = (sudoku) => {
    this.solveSudoku(sudoku)
    return sudoku
  }

  isValid = (board, row, col, k) => {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
    }
    return true;
  }

  //backtraking
  solveSudoku = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == null) {
          for (let k = 1; k <= 9; k++) {
            if (this.isValid(board, i, j, k)) { //check is k okey for space???
              board[i][j] = k;
              if (this.solveSudoku(board)) {
                return true;
              } else {
                board[i][j] = null;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
}

export default SudokuSolver
