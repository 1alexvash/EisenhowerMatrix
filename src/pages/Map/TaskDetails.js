import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { toast } from "react-toastify";

const TaskDetails = () => {
  const { tasks, activeTask } = useStoreState((state) => state);

  const { deleteTask, setActiveTask, updateTaskValue, saveTask } =
    useStoreActions((actions) => actions);

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
        <b>Name</b>:
        <input
          className="input-name"
          type="text"
          value={activeTask.name}
          onChange={(e) => {
            updateTaskValue({
              value: e.target.value,
              parameter: "name",
            });
          }}
        />
      </section>
      <section>
        <p>
          <b>Importance</b>: {activeTask.importance}
        </p>
        <div className="arrows">
          <button
            className="arrow arrow-up"
            disabled={activeTask.importance === 10}
            onClick={() => {
              updateTaskValue({
                value: activeTask.importance + 1,
                parameter: "importance",
              });
            }}
          />
          <button
            className="arrow arrow-down"
            disabled={activeTask.importance === 1}
            onClick={() => {
              updateTaskValue({
                value: activeTask.importance - 1,
                parameter: "importance",
              });
            }}
          />
        </div>
      </section>
      <section>
        <p>
          <b>Urgency</b>: {activeTask.urgency}{" "}
        </p>
        <div className="arrows">
          <button
            className="arrow arrow-up"
            disabled={activeTask.urgency === 10}
            onClick={() => {
              updateTaskValue({
                value: activeTask.urgency + 1,
                parameter: "urgency",
              });
            }}
          />
          <button
            className="arrow arrow-down"
            disabled={activeTask.urgency === 1}
            onClick={() => {
              updateTaskValue({
                value: activeTask.urgency - 1,
                parameter: "urgency",
              });
            }}
          />
        </div>
      </section>
      <section>
        <b>Score</b>: {activeTask.importance} * {activeTask.urgency} ={" "}
        {activeTask.importance * activeTask.urgency}
      </section>
      <div className="controls">
        <button
          disabled={tasks.indexOf(activeTask) >= 0}
          className="save"
          onClick={saveTask}
        >
          Save
        </button>
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
