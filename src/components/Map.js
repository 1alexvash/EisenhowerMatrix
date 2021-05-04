import React from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Map = () => {
  return (
    <div className="Map">
      <div className="container">
        <div className="horizontal-lines">
          {[numbers.map((n) => <div key={n} className="line" />)]}
        </div>
        <div className="vertical-lines">
          {[numbers.map((n) => <div key={n} className="line" />)]}
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
