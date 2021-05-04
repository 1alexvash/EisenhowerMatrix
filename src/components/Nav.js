import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <NavLink exact activeClassName="active" to="/">
        Tasks
      </NavLink>
      <NavLink exact activeClassName="active" to="/add-new-task">
        New Task
      </NavLink>
    </nav>
  );
};

export default Nav;
