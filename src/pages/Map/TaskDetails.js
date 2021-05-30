// TODO: add ability to update taks by pushing eneter button

import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { toast } from "react-toastify";

const TaskDetails = () => {
  const { tasks, activeTask } = useStoreState((state) => state);

  const { deleteTask, setActiveTask, updateTaskValue, updateTask } =
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

  const isNotValid = () => {
    return Object.values(tasks[activeTask.index]).every(
      (val, index) => val === Object.values(activeTask)[index]
    );
  };

  return (
    <div className="task-details">
      <h2>Task Details:</h2>
      <section className="name">
        <input
          className="input-name"
          type="text"
          value={activeTask.name}
          placeholder="Name of the task"
          onChange={(e) => {
            updateTaskValue({
              value: e.target.value,
              parameter: "name",
            });
          }}
        />
      </section>
      <section className="flex">
        <div>
          <strong>Importance</strong>:
          <div className="arrows">
            <span className="number">{activeTask.importance}</span>
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
        </div>
        <div>
          <strong>Urgency</strong>:
          <div className="arrows">
            <span className="number">{activeTask.urgency}</span>
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
        </div>
      </section>
      <section className="score">
        <b>Score</b>: {activeTask.importance} * {activeTask.urgency} ={" "}
        {activeTask.importance * activeTask.urgency}
      </section>
      <section className="controls">
        <button disabled={isNotValid()} className="update" onClick={updateTask}>
          Update
        </button>
        <button
          className="delete"
          title="Click on to delete this task"
          onClick={handleDelete}
        >
          Delete
        </button>
      </section>
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
