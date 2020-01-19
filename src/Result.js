import React from 'react';
import { Link } from "react-router-dom";

function Result(props) {
  const {birthday, clearBirthday} = props;
  // const history = useHistory();

  // function restart() {
    // history.goBack();
  // }

  return (
    <main>
      <h4>{birthday.year}/{birthday.month}/{birthday.day}</h4>
      <h2>你的生日</h2>
      <h3>Your Birthday</h3>

      <Link to="/" onClick={clearBirthday}>
        <button>&larr;&larr;</button>
      </Link>
    </main>
  );
}

export default Result;
