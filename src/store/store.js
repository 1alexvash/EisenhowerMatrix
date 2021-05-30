import { createStore } from "easy-peasy";
import actions from "./actions";

const store = createStore({
  activeTask: null,
  tasks: localStorage.tasks === undefined ? [] : JSON.parse(localStorage.tasks),
  ...actions,
});

export default store;
