import React from "react";

const Modal = ({ show, close, children }) => {
  const closeHandler = (e) => {
    if (e.target.className === "Modal") {
      close();
    }
  };

  return show ? (
    <div className="Modal" onClick={closeHandler}>
      {children}
    </div>
  ) : null;
};

export default Modal;
