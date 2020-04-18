import React from 'react';

function DifficiltyButtons({ gameModDifficulty }) {
  var modes = ['easy', 'medium', 'hard']

  return (
    <div>
      {/* <ul>
        <li><a onClick={() => gameModDifficulty()} >Easy</a></li>
        <li><a onClick={() => gameModDifficulty()} >Medium</a></li>
        <li><a onClick={() => gameModDifficulty()} >Hard</a></li>
      </ul> */}

      {modes.map((mode, index) =>
        <li key={index} onClick={() => gameModDifficulty(index)}> {mode} </li>
      )}

    </div >
  )
}

export default DifficiltyButtons;