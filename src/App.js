// TODO: create map component with information
// TODO: ability to edit tasks values
// TODO: ability to delete tasks
// TODO: Create app logo

import React from "react";

import "./scss/main.css";
import "react-toastify/dist/ReactToastify.css";

import { StoreProvider } from "easy-peasy";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store/store";

import Nav from "./components/Nav";
import Map from "./components/Map";
import Form from "./components/Form";
import About from "./components/About";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Map} />
          <Route exact path="/add-new-task" component={Form} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>

      <ToastContainer />
    </StoreProvider>
  );
};

export default App;
