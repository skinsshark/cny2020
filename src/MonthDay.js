import React from 'react';
import { useHistory } from "react-router-dom";
import MonthInput from './inputs/MonthInput';
import DayInput from './inputs/DayInput';
import './inputs/Input.css';

function MonthDay(props) {
  const {month, setMonth, day, setDay} = props;
  const history = useHistory();

  function prevPage() {
    history.goBack();
  }

  function nextPage() {
    history.push("/result");
  }

  return (
    <main>
      <section className="month-day">
        <article>
          <MonthInput
            month={month}
            setMonth={setMonth}
          />
          <h3>Month</h3>
        </article>
        <article>
          <DayInput
            day={day}
            setDay={setDay}
          />
          <h3>Day</h3>
        </article>
      </section>
      <button
        className="back"
        onClick={prevPage}
      >&larr;</button>
      <button
        disabled={month.length < 1 || day.length < 1}
        className="forward"
        onClick={nextPage}
      >&rarr;</button>
    </main>
  );
}

export default MonthDay;
