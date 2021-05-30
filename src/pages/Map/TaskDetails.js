import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { toast } from "react-toastify";

import arrowUp from "../../images/arrow-up.png";
import arrowDown from "../../images/arrow-down.png";

const TaskDetails = () => {
  const { activeTask } = useStoreState((state) => state);
  const { deleteTask, setActiveTask, updateTaskValue } = useStoreActions(
    (actions) => actions
  );

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(activeTask);
      setActiveTask(null);
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
      <section>
        <b>Name</b>: {activeTask.name}
      </section>
      <section>
        <b>Importance</b>: {activeTask.importance}{" "}
        <div className="arrows">
          <img
            src={arrowUp}
            onClick={() => {
              updateTaskValue({
                value: activeTask.importance + 1,
                parameter: "importance",
              });
            }}
            alt=""
          />
          <img
            src={arrowDown}
            onClick={() => {
              updateTaskValue({
                value: activeTask.importance - 1,
                parameter: "importance",
              });
            }}
            alt=""
          />
        </div>
      </section>
      <section>
        <b>Urgency</b>: {activeTask.urgency}{" "}
        <div className="arrows">
          <img
            src={arrowUp}
            onClick={() => {
              updateTaskValue({
                value: activeTask.urgency + 1,
                parameter: "urgency",
              });
            }}
            alt=""
          />
          <img
            src={arrowDown}
            onClick={() => {
              updateTaskValue({
                value: activeTask.urgency - 1,
                parameter: "urgency",
              });
            }}
            alt=""
          />
        </div>
      </section>
      <section>
        <b>Score</b>: {activeTask.importance} * {activeTask.urgency} ={" "}
        {activeTask.importance * activeTask.urgency}
      </section>
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
        onClick={() => setActiveTask(null)}
      >
        ❌
      </div>
    </div>
  );
};

export default TaskDetails;
