import { action, thunk } from "easy-peasy";

const actions = {
  addTask: action((state, payload) => {
    state.tasks.push(payload);
    localStorage.tasks = JSON.stringify(state.tasks);
  }),
  addTaskThunk: thunk((actions, payload, { getState }) => {
    const { tasks } = getState();

    if (
      tasks.some(
        ({ name }) => name.toUpperCase() === payload.name.toUpperCase()
      )
    ) {
      return "name error";
    }

    if (
      tasks.some(
        (task) =>
          task.importance === payload.importance &&
          task.urgency === payload.urgency
      )
    ) {
      return "coordinates error";
    }

    actions.addTask(payload);
    return "success";
  }),
  deleteTask: action((state, payload) => {
    console.log("tasks:", state.tasks);
    console.log("payload:", payload);
    const index = state.tasks.findIndex(({ name }) => name === payload.name);
    console.log("index:", index);
    state.tasks.splice(0, 1);
    localStorage.tasks = JSON.stringify(state.tasks);
  }),
};

export default actions;
