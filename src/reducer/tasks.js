import * as ACTIONS from "../constants/ACTIONS";
import { generateId } from "../helpers/generateId";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
const tasksReducer = (state = initialState, action) => {
  let index = "";
  switch (action.type) {
    case ACTIONS.LIST_ALL:
      return state;
    case ACTIONS.SAVE_TASK:
      const newTask = {
        ...action.task,
      };

      if (!newTask.id) {
        newTask.id = generateId();
        newTask.status = false;
        state = [...state, newTask];
      } else {
        index = state.findIndex((task) => task.id === newTask.id);
        state[index] = {
          ...newTask,
        };
      }

      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case ACTIONS.TOGGLE_STATUS_TASK:
      index = state.findIndex((task) => task.id === action.id);
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case ACTIONS.DELETE_TASK:
      index = state.findIndex((task) => task.id === action.id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default tasksReducer;
