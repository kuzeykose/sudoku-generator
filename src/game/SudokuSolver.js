import React, { Component } from 'react'

function SudokuSolver({ mySudoku }) {

  const solveMySudoku = (sudoku) => {
    solveSudoku(sudoku)
    console.log(sudoku);

  }

  function isValid(board, row, col, k) {
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
  var solveSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == null) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(board, i, j, k)) {
              board[i][j] = k;
              if (solveSudoku(board)) {
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

  return (
    <div>
      <button onClick={() => solveMySudoku(mySudoku)}> solve</button>
    </div>
  )
}

export default SudokuSolver
