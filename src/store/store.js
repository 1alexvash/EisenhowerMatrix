import { createStore, action } from "easy-peasy";

const store = createStore({
  tasks: localStorage.tasks === undefined ? [] : JSON.parse(localStorage.tasks),
  addTask: action((state, payload) => {
    state.tasks.push(payload);
    localStorage.tasks = JSON.stringify(state.tasks);
  }),
});

export default store;
