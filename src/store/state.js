const state = {
  activeTask: null,
  tasks: localStorage.tasks === undefined ? [] : JSON.parse(localStorage.tasks),
};

export default state;
