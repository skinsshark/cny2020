import React from 'react';

const NUMBERS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

export function chineseNumbers(digits) {
  const arr = Array.from(digits);
  const numbersStr = arr.map(number => NUMBERS[number])

  return <header><h4>{numbersStr.join('')}</h4></header>
}

export function limitInputLength(value, setFunction, definedLength) {
  if (value.length > definedLength) {
    setFunction(value.slice(0, definedLength))
  } else {
    setFunction(value)
  }
}
