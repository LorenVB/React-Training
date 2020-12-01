import React, { Fragment } from "react";
import PropTypes from "prop-types";

//Functional component

const FirstApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
      <p>{subtitulo}</p>
    </>
  );
};

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default FirstApp;
