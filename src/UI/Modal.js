import React from "react";

const Modal = ({ show, close, component }) => {
  return show ? (
    <div
      className="Modal"
      onClick={(e) => {
        if (e.target.className === "Modal") {
          close();
        }
      }}
    >
      {component}
    </div>
  ) : null;
};

export default Modal;
