import React from 'react';
import './Result.css';
import data from './animals.json';
import moment from 'moment';
import 'moment-lunar';

function calcAnimal(birthday) {
  const { year, month, day } = birthday;
  /* eslint-disable no-unused-vars */
  const [ _newYear, newMonth, newDay ] = moment().year(year).month(0).date(1).solar().format('YYYY-MM-DD').split('-');

  const { animals } = data;
  let i = year % 12;
  if (month < Number(newMonth) || (month === Number(newMonth) && day < Number(newDay))) {
    i--;
  }

  if (i < 0) {
    i = 11;
  }

  const name = Object.keys(animals)[i];

  return {
    ...animals[name],
    name
  };
}

function Result(props) {
  const {birthday} = props;
  const { emoji, character, name } = calcAnimal(birthday);

  return (
    <>
      <footer>
        <a href="https://sharonzheng.com/"
          target="_blank" rel="noopener noreferrer">福</a>
      </footer>
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
    </>
  );
}

export default Result;
