import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, styleType, onClick }) => {
  const buttonClassName = `button ${styleType}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  styleType: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
