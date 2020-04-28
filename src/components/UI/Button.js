import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 1rem;
  padding: 10px;
`;

const Button = ({ btnName, onClick }) => {
  return <StyledButton onClick={onClick}>{btnName}</StyledButton>;
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
