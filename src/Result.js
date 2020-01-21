import React from 'react';
import { Link } from "react-router-dom";
import './Result.css';
import data from './animals.json';

function Result(props) {
  const {birthday, clearBirthday} = props;
  // const history = useHistory();

  // function restart() {
    // history.goBack();
    // <h4>{birthday.year}/{birthday.month}/{birthday.day}</h4>
  // }

  // <Link to="/" onClick={clearBirthday}>
  //   <button>&larr;&larr;</button>
  // </Link>

  return (
    <div className="result">
      <h5>{birthday.year}/{birthday.month}/{birthday.day}</h5>
      <div className="ani">
        <div className="moji">🐅🐅🐅</div>
        <div className="text">虎</div>
        <div className="moji right">🐅🐅🐅</div>
      </div>
    </div>
  );
}

export default Result;
