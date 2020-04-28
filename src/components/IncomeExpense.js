import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colorChooser } from "../utils";

const StyledDiv = styled.div`
  flex: 1;
  text-align: center;
  p {
    font-size: 20px;
    letter-spacing: 1px;
    margin: 10px 0;
    color: ${(props) => colorChooser(props.type)};
  }
`;

const IncomeExpense = ({ type, title, text }) => {
  return (
    <StyledDiv type={type}>
      <h4>{title}</h4>
      <p>{text}</p>
    </StyledDiv>
  );
};

IncomeExpense.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IncomeExpense;
