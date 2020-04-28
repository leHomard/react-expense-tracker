import React, { Fragment } from "react";
import styled from "styled-components";

import ComponentTitle from "./ComponentTitle";
import Transaction from "./Transaction";
import useAppContext from "../hooks/useAppContext";

const StyledList = styled.ul`
  padding: 15px 10px 0;
  margin: 0;
`;

const TransactionList = () => {
  const { transactions, deleteTransaction } = useAppContext();
  return (
    <Fragment>
      {transactions.length > 0 && (
        <Fragment>
          <ComponentTitle title="History" />
          {transactions &&
            transactions.map((t) => (
              <Transaction
                onDelete={() => deleteTransaction(t.id, t.amount)}
                transaction={t}
                key={t.id}
                type={t.type}
              />
            ))}
        </Fragment>
      )}
      <StyledList></StyledList>
    </Fragment>
  );
};

export default TransactionList;
