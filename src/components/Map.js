// TODO: show some information on hovering the task
// TODO: explain what this information means and what should be get done

import React, { useState } from "react";
import { useStoreState } from "easy-peasy";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Map = () => {
  const { tasks } = useStoreState((state) => state);
  const [activeTask, setActiveTask] = useState({});
  console.log("tasks:", tasks);

  return (
    <div className="Map">
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
            key={index}
            className={`${
              task.name === activeTask.name ? "task active" : "task"
            }`}
            style={{
              bottom: `${(100 / 11) * task.importance}%`,
              left: `${(100 / 11) * task.urgency}%`,
            }}
            onClick={() => setActiveTask(task)}
          >
            <div className="task-info">
              <div>
                <b>Name: </b>
                {task.name}
              </div>
              <div>
                <b>Urgency: </b>
                {task.urgency}
              </div>
              <div>
                <b>Importance: </b> {task.importance}
              </div>
            </div>
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
