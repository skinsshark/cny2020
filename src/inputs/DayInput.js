import React from 'react';
import './Input.css';
import { chineseNumbers, limitInputLength } from '../utils';

const DAY_LENGTH = 2;

function DayInput(props) {
  return (
    <div>
      {chineseNumbers(props.day)}
      <input
        value={props.day}
        type="number"
        maxLength={DAY_LENGTH}
        placeholder="日子"
        onChange={(e) => limitInputLength(e.target.value, props.setDay, DAY_LENGTH)}
      />
    </div>
  );
}

export default DayInput;
