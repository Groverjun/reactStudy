import { ADD_ROUTER ,USER_DATA} from "../actions/actionTypes";

const userState = {
  router:[],
  userData:{}
};

export default function(state = userState, action) {
  switch (action.type) {
    case ADD_ROUTER: {
      //
      localStorage.setItem("router",JSON.stringify(action.payload))
      return {
        ...state,
        router:action.payload
      };
    }
    case USER_DATA: {
      localStorage.setItem("userData",JSON.stringify(action.payload))
      return {
        ...state,
        userData:action.payload
      };
    }
    default:
      return state;
  }
}
