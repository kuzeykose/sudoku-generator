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
        [0,0,0,0,0,0,0,0,0,],]
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
   
          if(this.checkRow(i,randomNumber,sudoku)&&this.checkColumn(j,randomNumber, sudoku)){
            sudoku[i][j]=randomNumber
          }else{
            sudoku[i][j]=''      
          } 
        }while (sudoku[i][j] === 0)
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

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Sudoku;
