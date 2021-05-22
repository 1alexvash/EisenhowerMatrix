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
};

export default actions;
