import * as ACTIONS from "../constants/ACTIONS";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MENU:
      return true;
    case ACTIONS.CLOSE_MENU:
      return false;
    case ACTIONS.TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
};

export default myReducer;
