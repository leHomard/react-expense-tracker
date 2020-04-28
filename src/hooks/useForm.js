import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});

  /* change whatever input based on the name (e.g) :
   <input name="password" /> ==> values.password */
  function handleChange(e) {
    const { name, value } = e.target;
    e.preventDefault();
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return {
    values,
    handleChange,
    setValues,
  };
};

export default useForm;
