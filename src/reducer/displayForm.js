import * as ACTIONS from "../constants/ACTIONS";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FORM:
      return !state;
    case ACTIONS.OPEN_FORM:
      return true;
    case ACTIONS.CLOSE_FORM:
      return false;
    default:
      return state;
  }
};

export default myReducer;
