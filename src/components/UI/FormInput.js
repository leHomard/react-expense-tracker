import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledElement = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem 0 1rem;
  label {
    display: inline-block;
    margin: 10px 0;
  }
  input {
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
  }
`;

const FormInput = ({ text, placeholder, value, onChange, name }) => {
  return (
    <StyledElement>
      <label>{text}</label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledElement>
  );
};

FormInput.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
