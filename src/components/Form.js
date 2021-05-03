// TODO: probbably show this component in the pop up
// TODO: add function to submit the data

import React, { useState } from "react";

import { useStoreActions } from "easy-peasy";

const Form = () => {
  const { addTask } = useStoreActions((actions) => actions);

  const [formValues, setFormValues] = useState({
    name: "",
    importance: 5,
    urgency: 5,
  });

  function updateInput(name, value) {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // addTask();
  }

  return (
    <form onSubmit={handleSubmit} className="Form">
      <label>Name of the task:</label>
      <input
        type="text"
        value={formValues.name}
        onChange={(e) => updateInput("name", e.target.value)}
      />
      <label>0 Not Important | 10 Very Important:</label>
      <input
        type="range"
        value={formValues.importance}
        onChange={(e) => updateInput("importance", parseInt(e.target.value))}
        min="1"
        max="10"
      />
      <label>0 Not Urgent | 10 Very Urgent:</label>
      <input
        type="range"
        value={formValues.urgency}
        onChange={(e) => updateInput("urgency", parseInt(e.target.value))}
        min="1"
        max="10"
      />
      <button type="submit" disabled={formValues.name === ""}>
        Submit
      </button>
    </form>
  );
};

export default Form;
