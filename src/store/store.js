import { createStore, action } from "easy-peasy";

const store = createStore({
  tasks: [],
  addTask: action((state, payload) => {
    state.tasks.push(payload);
  }),
});

export default store;
