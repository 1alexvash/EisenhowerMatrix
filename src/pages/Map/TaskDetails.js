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

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask();
  };

  return (
    <form onSubmit={handleSubmit} className="task-details">
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
              type="button"
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
              type="button"
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
              type="button"
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
              type="button"
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
        <button className="update" type="submit" disabled={isNotValid()}>
          Update
        </button>
        <button
          className="delete"
          type="button"
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
    </form>
  );
};

export default TaskDetails;
