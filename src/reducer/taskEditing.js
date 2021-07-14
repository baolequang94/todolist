import * as ACTIONS from "../constants/ACTIONS";

const initialState = {
  id: "",
  name: "",
  status: false,
  priority: 1,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.EDIT_TASK:
      return { ...action.taskEditing };
    default:
      return state;
  }
};

export default myReducer;
