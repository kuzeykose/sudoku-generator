import React from 'react'

class sudokuGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sudoku: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      ]
    };
  }

  fillMySudoku = () => {
    var updatedSudoku = this.state.sudoku
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.fillMyBox(i, j, updatedSudoku)
        if (updatedSudoku[i][j] === undefined) {
          j = 0
        }
      }
    }
    return updatedSudoku
  }

  fillMyBox = (i, j, array) => {
    var randomNumber
    do {
      var myNumberArray = []
      for (let k = 1; k < 10; k++) {
        if (this.checkBox(i, j, k, array) && this.checkRow(i, k, array) && this.checkColumn(j, k, array)) {
          myNumberArray.push(k)
        }
        randomNumber = myNumberArray[Math.floor(Math.random() * myNumberArray.length)]
        array[i][j] = randomNumber
      }
    } while (array[i][j] === 0);

  }

  checkRow = (i, posibleNumbers, array) => {
    for (let j = 0; j < 9; j++) {
      if (array[i][j] === posibleNumbers) {
        return false
      }
    }
    return true
  }

  checkColumn = (j, posibleNumbers, array) => {
    for (let i = 0; i < 9; i++) {
      if (array[i][j] === posibleNumbers) {
        return false
      }
    }
    return true
  }

  checkBox = (i, j, posibleNumbers, array) => {
    var object = this.takeNumberPosition(i, j)
    for (let r = object.x1; r <= object.x2; r++) {
      for (let c = object.y1; c <= object.y2; c++) {
        if (array[r][c] === posibleNumbers)
          return false
      }
    }
    return true
  }

  takeNumberPosition = (i, j) => {
    var object = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    }

    if (i >= 0 && i < 3) {
      object.x1 = 0
      object.x2 = 2
    } else if (i >= 3 && i < 6) {
      object.x1 = 3
      object.x2 = 5
    } else if (i >= 6 && i < 9) {
      object.x1 = 6
      object.x2 = 8
    }

    if (j >= 0 && j < 3) {
      object.y1 = 0
      object.y2 = 2
    } else if (j >= 3 && j < 6) {
      object.y1 = 3
      object.y2 = 5
    } else if (j >= 6 && j < 9) {
      object.y1 = 6
      object.y2 = 8
    }
    return object
  }
}
export default sudokuGenerator