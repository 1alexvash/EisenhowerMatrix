import { createStore, action } from "easy-peasy";

const store = createStore({
  tasks: [],
  addTask: action((state, payload) => {
    console.log("payload:", payload);
  }),
});

export default store;
