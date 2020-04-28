import React from "react";
import styled from "styled-components";

import IncomeExpense from "./IncomeExpense";

const StyledCard = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  div:first-of-type {
    border-right: 1px solid #dedede;
  }
`;

const Card = ({ inc, exp }) => {
  return (
    <StyledCard>
      <IncomeExpense type="Inc" title="INCOME" text={"$" + inc} />
      <IncomeExpense type="Exp" title="EXPENSE" text={"$" + exp} />
    </StyledCard>
  );
};

export default Card;
