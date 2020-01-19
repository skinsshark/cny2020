import React from 'react';
import './Input.css';

const YEAR_LENGTH = 4;
const NUMBERS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

function limitInputLength(value, setYear) {
  if (value.length > YEAR_LENGTH) {
    setYear(value.slice(0, YEAR_LENGTH))
  } else {
    setYear(value)
  }
}

function chineseNumbers(digits) {
  const arr = Array.from(digits);
  const numbersStr = arr.map(number => NUMBERS[number])

  return <h4>{numbersStr.join('')}</h4>
}

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
        onChange={(e) => limitInputLength(e.target.value, props.setYear)}
      />
    </div>
  );
}

export default YearInput;