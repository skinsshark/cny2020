import React from 'react';
import './Input.css';
import { chineseNumbers, limitInputLength } from '../utils';

const YEAR_LENGTH = 4;

function YearInput(props) {
  return (
    <div>
      {chineseNumbers(props.year)}
      <input
        autoFocus={true}
        value={props.year}
        type="number"
        maxLength={YEAR_LENGTH}
        placeholder="输入出生年"
        onChange={(e) => limitInputLength(e.target.value, props.setYear, YEAR_LENGTH)}
      />
    </div>
  );
}

export default YearInput;
