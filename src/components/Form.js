import React from "react";
import styled from "styled-components";

import FormInput from "./UI/FormInput";
import Button from "./UI/Button";
import useForm from "../hooks/useForm";
import useAppContext from "../hooks/useAppContext";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Form = () => {
  const { values, handleChange, setValues } = useForm();
  const { addTransaction } = useAppContext();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { text, amount } = values;
    addTransaction(text, amount);
    setValues("");
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <FormInput
        text="Text"
        name="text"
        placeholder="Enter text..."
        value={values.text || ""}
        onChange={handleChange}
      />
      <FormInput
        text="Amount"
        name="amount"
        placeholder="Enter amount..."
        value={values.amount || ""}
        onChange={handleChange}
      />
      <Button btnName="Add transaction" onClick={() => {}} />
    </StyledForm>
  );
};

export default Form;
