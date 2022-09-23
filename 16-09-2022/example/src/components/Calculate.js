import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const Calculate = (props) => {
  const [number, setNumber] = useState(0);

  function addOne() {
    setNumber(number + 1);
  }

  function subOne() {
    setNumber(number - 1);
  }

  function addHundred() {
    setNumber(number + 100);
  }

  function subHundred() {
    setNumber(number - 100);
  }

  return (
    <div>
      <h1>Calculate</h1>
      <h2>{number}</h2>
      <Button onClick={addOne}>+1</Button>
      <Button onClick={subOne}>-1</Button>
      <Button onClick={addHundred}>+100</Button>
      <Button onClick={subHundred}>-100</Button>
    </div>
  );
};

Calculate.propTypes = {};

export default Calculate;
