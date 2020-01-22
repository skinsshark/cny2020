import React from 'react';
// import { Link } from "react-router-dom";
import './Result.css';
import data from './animals.json';

function calcAnimal(birthday) {
  const { year } = birthday;
  // const { year, month, day } = birthday;
  const { animals } = data;
  const i = year % 12;
  const name = Object.keys(animals)[i];

  return {
    ...animals[name],
    name
  };
}

function Result(props) {
  // const {birthday, clearBirthday} = props;
  const {birthday} = props;
  const { emoji, character, name } = calcAnimal(birthday);

  return (
    <div className="result">
      <h5>{birthday.year}/{birthday.month}/{birthday.day}</h5>
      <div className="ani">
        <div className="moji">
          <span role="img" aria-label={name}>{emoji}</span>
          <span role="img" aria-label={name}>{emoji}</span>
          <span role="img" aria-label={name}>{emoji}</span>
        </div>
        <div className="text">{character}</div>
        <div className="moji right">
          <span role="img" aria-label={name}>{emoji}</span>
          <span role="img" aria-label={name}>{emoji}</span>
          <span role="img" aria-label={name}>{emoji}</span>
        </div>
      </div>
    </div>
  );
}

export default Result;
