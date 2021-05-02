import React from "react";

import "./scss/main.css";

import { StoreProvider } from "easy-peasy";
import store from "./store/store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App"></div>
    </StoreProvider>
  );
};

export default App;
