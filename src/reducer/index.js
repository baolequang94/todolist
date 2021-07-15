import tasks from "./tasks";
import displayForm from "./displayForm";
import taskEditing from "./taskEditing";
import filter from "./filter";
import menu from "./menu";
import darkMode from "./darkMode";
import { combineReducers } from "redux";

const myReducer = combineReducers({
  tasks,
  taskEditing,
  isDisplayForm: displayForm,
  filter,
  isDisplayMenu: menu,
  isDarkMode: darkMode,
});

export default myReducer;
