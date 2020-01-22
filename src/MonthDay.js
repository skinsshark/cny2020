import React from 'react';
import { useCallback, useEffect } from 'react';
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

  const onEnterPress = useCallback((event) => {
    if (event.keyCode === 13) {
      nextPage();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onEnterPress, false);

    return () => {
      document.removeEventListener("keydown", onEnterPress, false);
    };
  }, []);

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
        disabled={month.length < 1 || day.length < 1 || month < 1 || month > 12 || day < 1 || day > 31}
        className="forward"
        onClick={nextPage}
      >&rarr;</button>
    </main>
  );
}

export default MonthDay;
