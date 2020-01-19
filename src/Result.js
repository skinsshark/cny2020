import React from 'react';
// import { useHistory } from "react-router-dom";

function Result(props) {
  const {birthday} = props;
  // const history = useHistory();

  // function restart() {
    // history.goBack();
  // }

  return (
    <main>
      <h4>{birthday.year}/{birthday.month}/{birthday.day}</h4>
      <h2>你的生日</h2>
      <h3>Your Birthday</h3>
    </main>
  );
}

export default Result;
