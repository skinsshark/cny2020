import React from 'react';
import {useState} from 'react';
import YearInput from './YearInput';
import './App.css';

function App() {
  const [year, setYear] = useState('');

  return (
    <main>
      <YearInput year={year} setYear={setYear} />
      <h3>Enter your birth year</h3>
    </main>
  );
}

export default App;
