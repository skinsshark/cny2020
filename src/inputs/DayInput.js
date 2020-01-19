import React from 'react';
import './Input.css';

const DAY_LENGTH = 2;
const NUMBERS = ["零","一","二","三","四","五","六","七","八","九"];

function limitInputLength(value, setDay) {
  if (value.length > DAY_LENGTH) {
    setDay(value.slice(0, DAY_LENGTH))
  } else {
    setDay(value)
  }
}

function chineseNumbers(digits) {
  const arr = Array.from(digits);
  const numbersStr = arr.map(number => NUMBERS[number])

  return <header><h4>{numbersStr.join('')}</h4></header>
}

function DayInput(props) {
  return (
    <div>
      {chineseNumbers(props.day)}
      <input
        value={props.day}
        type="number"
        maxLength={DAY_LENGTH}
        placeholder="日子"
        onChange={(e) => limitInputLength(e.target.value, props.setDay)}
      />
    </div>
  );
}

export default DayInput;
