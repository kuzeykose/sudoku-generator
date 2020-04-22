import React from 'react';

function DifficiltyButtons({ gameModDifficulty }) {
  var modes = ['easy', 'medium', 'hard']

  return (
    <div>
      {modes.map((mode, index) =>
        <li key={index} onClick={() => gameModDifficulty(index)}> {mode} </li>
      )}
    </div >
  )
}

export default DifficiltyButtons;