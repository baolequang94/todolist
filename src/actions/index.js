import * as ACTIONS from "../constants/ACTIONS";

export const listAll = () => {
  return {
    type: ACTIONS.LIST_ALL,
  };
};

export const saveTask = (task) => {
  return {
    type: ACTIONS.SAVE_TASK,
    task,
  };
};

export const toggleForm = () => {
  return {
    type: ACTIONS.TOGGLE_FORM,
  };
};

export const openForm = () => {
  return {
    type: ACTIONS.OPEN_FORM,
  };
};
export const closeForm = () => {
  return {
    type: ACTIONS.CLOSE_FORM,
  };
};

export const toggleStatus = (id) => {
  return {
    type: ACTIONS.TOGGLE_STATUS_TASK,
    id,
  };
};

export const editTask = (taskEditing) => {
  return {
    type: ACTIONS.EDIT_TASK,
    taskEditing,
  };
};

export const deleteTask = (id) => {
  return {
    type: ACTIONS.DELETE_TASK,
    id,
  };
};

export const filter = (filter) => {
  return {
    type: ACTIONS.FILTER,
    filter,
  };
};

// MENU

export const openMenu = () => {
  return {
    type: ACTIONS.OPEN_MENU,
  };
};
export const closeMenu = () => {
  return {
    type: ACTIONS.CLOSE_MENU,
  };
};
export const toggleMenu = () => {
  return {
    type: ACTIONS.TOGGLE_MENU,
  };
};
