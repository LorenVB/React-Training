import React, { Fragment } from "react";
import PropTypes from "prop-types";

//Functional component

const FirstApp = ({ saludo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
      <p>Mi primera aplicación</p>
    </>
  );
};

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default FirstApp;
