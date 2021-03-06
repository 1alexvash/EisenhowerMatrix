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
  setActiveTask: action((state, payload) => {
    state.activeTask = payload;
  }),
  updateTaskValue: action((state, { value, parameter }) => {
    state.activeTask[parameter] = value;
  }),
  updateTask: action((state, payload) => {
    const { index, ...activeTask } = state.activeTask;
    state.tasks[index] = { ...activeTask };
    state.activeTask = null;
    localStorage.tasks = JSON.stringify(state.tasks);
  }),
};

export default actions;
