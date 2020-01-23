import React from 'react';
import { useHistory } from "react-router-dom";
import './Main.css';

function Main(props) {
  // const {year, setYear} = props;
  const history = useHistory();

  function nextPage() {
    history.push("/start");
  }

  //星座?
  return (
    <main className="main">
      <h1>你是哪个生肖?</h1>
      <h3>Which Chinese Zodiac Sign Are You?</h3>
      <button onClick={nextPage}>&rarr;</button>
    </main>
  );
}

export default Main;
