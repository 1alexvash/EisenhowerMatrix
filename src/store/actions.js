import { action, thunk } from "easy-peasy";

const actions = {
  addTask: action((state, payload) => {
    state.tasks.push(payload);
    localStorage.tasks = JSON.stringify(state.tasks);
  }),
  addTaskThunk: thunk((actions, item) => {
    console.log("actions:", actions);
    console.log("item:", item);
    return 30;
  }),
};

export default actions;
