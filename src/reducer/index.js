import tasks from "./tasks";
import displayForm from "./displayForm";
import taskEditing from "./taskEditing";
import filter from "./filter";
import { combineReducers } from "redux";

const myReducer = combineReducers({
  tasks,
  taskEditing,
  isDisplayForm: displayForm,
  filter,
});

export default myReducer;
