import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { toast } from "react-toastify";

import arrowUp from "../../images/arrow-up.png";
import arrowDown from "../../images/arrow-down.png";

const TaskDetails = () => {
  const { activeTask } = useStoreState((state) => state);
  const { deleteTask, setActiveTask } = useStoreActions((actions) => actions);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(activeTask);
      setActiveTask({});
      toast.success("✅ The task was deleted", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (activeTask === null) {
    return "";
  }

  return (
    <div className="task-details">
      <h2>Task Details:</h2>
      <p>
        <b>Name</b>: {activeTask.name}
      </p>
      <p>
        <b>Importance</b>: {activeTask.importance}{" "}
        <div className="arrows">
          <img src={arrowUp} alt="" />
          <img src={arrowDown} alt="" />
        </div>
      </p>
      <p>
        <b>Urgency</b>: {activeTask.urgency}{" "}
        <div className="arrows">
          <img src={arrowUp} alt="" />
          <img src={arrowDown} alt="" />
        </div>
      </p>
      <p>
        <b>Score</b>: {activeTask.importance} * {activeTask.urgency} ={" "}
        {activeTask.importance * activeTask.urgency}
      </p>
      <div className="controls">
        <button className="save">Save</button>
        <button
          className="delete"
          title="Click on to delete this task"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div
        className="close"
        title="Click to close the window"
        onClick={() => setActiveTask({})}
      >
        ❌
      </div>
    </div>
  );
};

export default TaskDetails;
