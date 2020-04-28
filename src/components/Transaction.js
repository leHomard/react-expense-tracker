import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colorChooser, sign } from "../utils";

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow);
  height: 45px;
  background-color: #fff;
  padding: 0px 10px;
  margin: 10px 0 5px 0;
  border-right: 6px solid ${(props) => colorChooser(props.type)};
  *:hover {
    cursor: pointer;
  }
`;

const Transaction = ({ transaction, onDelete }) => {
  const { type, name, amount } = transaction;
  return (
    <StyledLi onClick={onDelete} type={type}>
      <div className="name">{name}</div>
      <div>
        {sign(amount)}${Math.abs(amount)}
      </div>
    </StyledLi>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Transaction;
