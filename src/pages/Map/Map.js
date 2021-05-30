// TODO: save button should be disabled by default

// TODO: show some information on hovering the task
// TODO: explain what this information means and what should be get done

// => task pop functionalitty:
// TODO: add some animation when pop up appears
// TODO: add some rought angle, so it looks like a real pop up
// TODO: Add ability to edit urgency and importance values by arrows ⬆⬇ (this should be dynamic)
// TODO:: add ability to delete the pop up
// TODO: add ability to add description to every task
// TODO: add save button
// TODO: every task should have acrronymcs of the task name
// TODO: every task should have randomly generated color
// TODO: add ability to change color of the task
// TODO: every task should have same generates letters

import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { toast } from "react-toastify";
import arrowUp from "../../images/arrow-up.png";
import arrowDown from "../../images/arrow-down.png";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Map = () => {
  const { tasks } = useStoreState((state) => state);
  const { deleteTask } = useStoreActions((actions) => actions);
  const [activeTask, setActiveTask] = useState({});
  console.log("tasks:", tasks);

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

  return (
    <div className="Map">
      {Object.keys(activeTask).length > 0 && (
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
      )}
      <div className="container">
        <div className="importance-text">
          <p>I</p>
          <p>M</p>
          <p>P</p>
          <p>O</p>
          <p>R</p>
          <p>T</p>
          <p>A</p>
          <p>N</p>
          <p>C</p>
          <p>E</p>
        </div>
        <div className="lines lines-horizontal">
          {[numbers.map((n) => <div key={n} className="line" />)]}
        </div>
        <div className="lines lines-vertical">
          {[numbers.map((n) => <div key={n} className="line" />)]}
        </div>
        {tasks.map((task) => (
          <div
            key={task.name}
            className={`${
              task.name === activeTask.name ? "task active" : "task"
            }`}
            style={{
              bottom: `${(100 / 11) * task.importance}%`,
              left: `${(100 / 11) * task.urgency}%`,
            }}
            onClick={() => setActiveTask(task)}
          >
            {task.name}
          </div>
        ))}
      </div>
      <div className="urgency">
        <div className="scale">
          {[numbers.map((number) => <span key={number}>{number}</span>)]}
        </div>
        <div className="text">Urgency</div>
      </div>
    </div>
  );
};

export default Map;
