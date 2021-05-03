// TODO: create map component with information
// TODO: ability to edit tasks values
// TODO: ability to delete tasks
// TODO: store all the data in localStorage
// TODO: Create app logo

import React from "react";

import "./scss/main.css";

import { StoreProvider } from "easy-peasy";
import store from "./store/store";

import Map from "./components/Map";
import Form from "./components/Form";

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Map />
        <Form isActive={false} />
      </div>
    </StoreProvider>
  );
};

export default App;
