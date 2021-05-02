// TODO: probbably show this component in the pop up
// TODO: add function to submit the data

import React from "react";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();

    console.log("The function was submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="Form">
      <label>Name of the task:</label>
      <input type="text" />
      <label>0 Not Important | 10 Very Important:</label>
      <input
        type="range"
        onChange={(e) => console.log(e.target.value)}
        min="1"
        max="10"
      />
      <label>0 Not Urgent | 10 Very Urgent:</label>
      <input
        type="range"
        onChange={(e) => console.log(e.target.value)}
        min="1"
        max="10"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
