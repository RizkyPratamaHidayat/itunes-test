import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
function searchInput(props) {
  const {
    inputChange,
    disabled,
    value,
    placeholder,
    type,
    className = "",
  } = props;
  return (
    <input
      className={`text-input ${className}`}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e) => inputChange(e)}
      type={type}
    />
  );
}
searchInput.propTypes = {
  inputChange: PropTypes.func,
};
searchInput.defaultProps = {
  inputChange: () => null,
};
export default searchInput;
