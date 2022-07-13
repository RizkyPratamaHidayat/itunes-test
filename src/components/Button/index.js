import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function Button(props) {
  const {
    handleClick,
    disabled,
    submitting,
    value,
    placeholder,
    type,
    className = "",
    label,
  } = props;

  const labelRenderer = () => {
    if (submitting) {
      return (
        <FontAwesomeIcon color={"white"} size={"lg"} icon={faSpinner} spin />
      );
    }
    return label;
  };

  return (
    <button
      className={`button-input ${className}`}
      value={value}
      disabled={submitting || disabled}
      placeholder={placeholder}
      onClick={(e) => handleClick()}
      type={type}
    >
      {labelRenderer()}
    </button>
  );
}
Button.propTypes = {
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  handleClick: () => null,
};
export default Button;
