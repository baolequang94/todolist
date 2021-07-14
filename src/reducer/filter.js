import * as ACTIONS from "../constants/ACTIONS";

const initialState = {
  name: "",
  priority: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FILTER:
      return { ...action.filter };
    default:
      return state;
  }
};

export default myReducer;
