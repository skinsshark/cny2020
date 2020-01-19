import React from 'react';
import {useState} from 'react';
import { MemoryRouter, Route } from 'react-router';
import Year from './Year';
import MonthDay from './MonthDay';
import Result from './Result';
import './App.css';

function genFullBirthday(year, month, day) {
  return {
    year,
    month,
    day,
  }
}

function App() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  function clearBirthday() {
    setYear('');
    setMonth('');
    setDay('');
  }

  return (
    <MemoryRouter>
      <Route
        exact
        path="/"
        render={() => <Year year={year} setYear={setYear} />}
      />
      <Route
        path="/almost"
        render={() => (
          <MonthDay
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
          />
        )}
      />
      <Route
        path="/result"
        render={() => (
          <Result
            birthday={genFullBirthday(year, month, day)}
            clearBirthday={clearBirthday}
          />
        )}
      />
    </MemoryRouter>
  );
}

export default App;
