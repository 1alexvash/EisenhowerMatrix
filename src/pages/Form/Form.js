import React, { useState } from "react";

import { useStoreActions } from "easy-peasy";

import { toast } from "react-toastify";

const initialFormValues = {
  name: "",
  importance: 0,
  urgency: 0,
};

const Form = ({ history }) => {
  const { addTaskThunk } = useStoreActions((actions) => actions);

  const [formValues, setFormValues] = useState(initialFormValues);

  function updateInput(name, value) {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const status = addTaskThunk(formValues);

    if (status === "name error") {
      toast.warning("⚠ The task with the same name already exists", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    if (status === "coordinates error") {
      toast.warning("⚠ The following coordinates are already taken", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    if (status === "success") {
      setFormValues(initialFormValues);
      history.push("/");
      toast.success("✅ The task was added", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  function isNotValid() {
    return Object.keys(formValues).some(
      (value) => Boolean(formValues[value]) === false
    );
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
        disabled={isNotValid()}
        title={isNotValid() ? "Fill the data" : "Click to submit"}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
