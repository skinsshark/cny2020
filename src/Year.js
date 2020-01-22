import React from 'react';
import { useHistory } from "react-router-dom";
import YearInput from './inputs/YearInput';
import './inputs/Input.css';

function Year(props) {
  const {year, setYear} = props;
  const history = useHistory();

  function nextPage() {
    history.push("/almost");
  }

  return (
    <main>
      <YearInput year={year} setYear={setYear} />
      <h3>Enter your birth year</h3>
      <button disabled={year.length !== 4 || year < 1920 || year > 2020} onClick={nextPage}>&rarr;</button>
    </main>
  );
}

export default Year;
