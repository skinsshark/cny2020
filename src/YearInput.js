import React from 'react';

const YEAR_LENGTH = 4;

function limitInputLength(value, setYear) {
  if (value.length > 4) {
    setYear(value.slice(0, YEAR_LENGTH))
  } else {
    setYear(value)
  }
}

function YearInput(props) {
  return (
    <input
      value={props.year}
      type="number"
      maxLength={YEAR_LENGTH}
      placeholder="输入出生年"
      onChange={(e) => limitInputLength(e.target.value, props.setYear)}
    />
  );
}

export default YearInput;
