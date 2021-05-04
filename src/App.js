// TODO: create map component with information
// TODO: ability to edit tasks values
// TODO: ability to delete tasks
// TODO: store all the data in localStorage
// TODO: Create app logo
// TODO: Add about page

import React from "react";

import "./scss/main.css";

import { StoreProvider } from "easy-peasy";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store/store";

import Nav from "./components/Nav";
import Map from "./components/Map";
import Form from "./components/Form";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Map} />
          <Route exact path="/add-new-task" component={Form} />
        </div>
      </Router>

      <ToastContainer />
    </StoreProvider>
  );
};

export default App;
