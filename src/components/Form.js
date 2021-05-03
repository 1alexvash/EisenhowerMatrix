// TODO: probbably show this component in the pop up
// TODO: add function to submit the data

import React, { useState } from "react";

import { useStoreActions } from "easy-peasy";

const Form = () => {
  const { addTask } = useStoreActions((actions) => actions);

  const [formValues, setFormValues] = useState({
    name: "",
    importance: 0,
    urgency: 0,
  });

  function updateInput(name, value) {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask();
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
      <div className="flex">
        <button className="number" disabled={formValues.importance === 0}>
          {formValues.importance}
        </button>
        <input
          type="range"
          value={formValues.importance}
          onChange={(e) => updateInput("importance", parseInt(e.target.value))}
          min="0"
          max="10"
        />
      </div>
      <label>0 Not Urgent | 10 Very Urgent:</label>
      <div className="flex">
        <button className="number" disabled={formValues.urgency === 0}>
          {formValues.urgency}
        </button>
        <input
          type="range"
          value={formValues.urgency}
          onChange={(e) => updateInput("urgency", parseInt(e.target.value))}
          min="0"
          max="10"
        />
      </div>
      <button
        type="submit"
        disabled={Object.keys(formValues).some(
          (value) => Boolean(formValues[value]) === false
        )}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
