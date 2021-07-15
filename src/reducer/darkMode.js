import * as ACTIONS from "../constants/ACTIONS";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
};

export default myReducer;
