import React from 'react';
import '../App.css'

class Sudoku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,],
      ]
    };
  }

  componentDidMount(){
    this.fillMySudoku()
  }

  fillMySudoku = () =>{
    var sudoku = this.state.squares
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
         do{
          var randomNumber = Math.floor(Math.random()*10)
          
          if(
            this.checkRow(i, randomNumber, sudoku) && 
            this.checkColumn(j, randomNumber, sudoku) &&
            this.checkBox(i, j, randomNumber, sudoku)
            ){
            sudoku[i][j]=randomNumber
          }else{
            sudoku[i][j]=null    
          } 
        }while (sudoku[i][j] === 0 )
      } 
    }
    console.log(sudoku);    
  }

  checkRow = (i,randomNumber, array) => {  
      for (let j = 0; j < 9; j++) {
        if(array[i][j]===randomNumber) {
          return false
        }   
    }
    return true
  }

  checkColumn = (j,randomNumber, array) => {  
    for (let i = 0; i < 9; i++) {      
      if(array[i][j]===randomNumber) {
        return false
      }   
    }
    return true
  }

  checkBox = (i, j, randomNumber, array) => {
    var object = this.takeNumberPosition(i,j)    
    for (let r = object.x1; r <= object.x2; r++) {
      for (let c = object.y1; c <= object.y2; c++) {
        if(array[r][c]===randomNumber) 
          return false
      }
    }
    return true
  }

  takeNumberPosition = (i,j) => {
    var object = {
      x1:0,
      x2:0,
      y1:0,
      y2:0
    }

    if (i>=0 && i<3) {
      object.x1=0
      object.x2=2
    }else if (i>=3 && i<6) {
      object.x1=3
      object.x2=5
    }else if (i>=6 && i<9) {
      object.x1=6
      object.x2=8
    }

    if (j>=0 && j<3) {
      object.y1=0
      object.y2=2
    }else if (j>=3 && j<6) {
      object.y1=3
      object.y2=5
    }else if (j>=6 && j<9) {
      object.y1=6
      object.y2=8
    }
    return object
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Sudoku;
