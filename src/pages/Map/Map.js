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

import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import TaskDetails from "./TaskDetails";
import Modal from "../../UI/Modal";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Map = () => {
  const { tasks, activeTask } = useStoreState((state) => state);
  const { setActiveTask } = useStoreActions((actions) => actions);

  return (
    <div className="Map">
      <Modal show={activeTask !== null} close={() => setActiveTask(null)}>
        <TaskDetails />
      </Modal>
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
        {tasks.map((task, index) => (
          <div
            key={task.name}
            className={`${
              // task.name === activeTask.name ? "task active" : "task"
              "task"
            }`}
            style={{
              bottom: `${(100 / 11) * task.importance}%`,
              left: `${(100 / 11) * task.urgency}%`,
            }}
            onClick={() => setActiveTask({ ...task, index })}
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
