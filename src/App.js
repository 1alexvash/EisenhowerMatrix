// TODO: create map component with information
// TODO: ability to edit tasks values
// TODO: ability to delete tasks
// TODO: store all the data in localStorage
// TODO: Create app logo

import React from "react";

import "./scss/main.css";

import { StoreProvider } from "easy-peasy";
import { HashRouter as Router } from "react-router-dom";
import store from "./store/store";

import Nav from "./components/Nav";
import Map from "./components/Map";
import Form from "./components/Form";

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Map />
          <Form isActive={false} />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
