import React from 'react';
import './Input.css';

const MONTH_LENGTH = 2;
const NUMBERS = ["零","一","二","三","四","五","六","七","八","九"];

function limitInputLength(value, setMonth) {
  if (value.length > MONTH_LENGTH) {
    setMonth(value.slice(0, MONTH_LENGTH))
  } else {
    setMonth(value)
  }
}

function chineseNumbers(digits) {
  const arr = Array.from(digits);
  const numbersStr = arr.map(number => NUMBERS[number])

  return <h4>{numbersStr.join('')}</h4>
}

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
        onChange={(e) => limitInputLength(e.target.value, props.setMonth)}
      />
    </div>
  );
}

export default MonthInput;
