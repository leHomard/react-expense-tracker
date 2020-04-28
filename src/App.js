import React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header";
import ComponentTitle from "./components/ComponentTitle";
import Card from "./components/Card";
import TransactionList from "./components/TransactionList";
import Form from "./components/Form";
import useAppContext from "./hooks/useAppContext";

const AppContainer = styled.div`
  max-width: 30%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const { balance, income, expense } = useAppContext();
  return (
    <AppContainer>
      <GlobalStyle />
      <Header title="Expense Tracker" />
      <ComponentTitle title="YOUR BALANCE">
        <h2>${balance}</h2>
      </ComponentTitle>
      <Card inc={income} exp={expense} />
      <TransactionList />
      <ComponentTitle title="Add new transaction" />
      <Form />
    </AppContainer>
  );
}

export default App;
