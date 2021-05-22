import { createStore } from "easy-peasy";
import actions from "./actions";

const store = createStore({
  tasks: localStorage.tasks === undefined ? [] : JSON.parse(localStorage.tasks),
  ...actions,
});

export default store;
