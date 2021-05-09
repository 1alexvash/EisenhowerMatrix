// TODO: add ability to click on the dot

import React from "react";
import { useStoreState } from "easy-peasy";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Map = () => {
  const { tasks } = useStoreState((state) => state);
  console.log("tasks:", tasks);

  return (
    <div className="Map">
      <div className="container">
        <div className="lines lines-horizontal">
          {[numbers.map((n) => <div key={n} className="line" />)]}
        </div>
        <div className="lines lines-vertical">
          {[numbers.map((n) => <div key={n} className="line" />)]}
        </div>
        {tasks.map((task, index) => (
          <div
            key={index}
            className="task"
            style={{
              bottom: `${(100 / 11) * task.importance}%`,
              left: `${(100 / 11) * task.urgency}%`,
            }}
          ></div>
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
