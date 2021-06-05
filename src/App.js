// TODO: Create app logo
// TODO: work on mobile version 1) navbar 2) map component should be scrollable

import React from "react";

import "./scss/main.css";
import "react-toastify/dist/ReactToastify.css";

import { StoreProvider } from "easy-peasy";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store/store";

import Nav from "./layouts/Nav";
import Map from "./pages/Map/Map";
import Form from "./pages/Form/Form";
import About from "./pages/About/About";

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
