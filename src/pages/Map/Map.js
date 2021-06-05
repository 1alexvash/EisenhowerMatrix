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
      <div className="scroll">
        <p className="text">Importance</p>
        <div className="container">
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
