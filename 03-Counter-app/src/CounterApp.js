import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); //[2 items]

  // handleAdd
  const handleAdd = (e) => {
    setCounter(counter + 1);
  };

  const handleReset = (e) => {
    setCounter(value);
  };

  const handleSubstract = (e) => {
    setCounter(counter - 1);
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
