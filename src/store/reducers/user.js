import { ADD_ROUTER } from "../actions/actionTypes";

const userState = {
  router:[],
  router1:[{a:"000"}],
};

export default function(state = userState, action) {
  switch (action.type) {
    case ADD_ROUTER: {
      //
      return {
        ...state,
        router:action.payload
      };
    }
    default:
      return state;
  }
}