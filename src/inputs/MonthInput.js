import React from 'react';
import './Input.css';
import { chineseNumbers, limitInputLength } from '../utils';

const MONTH_LENGTH = 2;

function MonthInput(props) {
  return (
    <div>
      {chineseNumbers(props.month)}
      <input
        autoFocus={true}
        value={props.month}
        type="number"
        maxLength={MONTH_LENGTH}
        placeholder="月份"
        onChange={(e) => limitInputLength(e.target.value, props.setMonth, MONTH_LENGTH)}
      />
    </div>
  );
}

export default MonthInput;
