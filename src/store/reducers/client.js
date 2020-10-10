import { CLIENT_ADMIN} from "../actions/actionTypes";

const clientState = {
    clientAdmin:{}
};

export default function(state = clientState, action) {
  switch (action.type) {
    case CLIENT_ADMIN: {
      sessionStorage.setItem("clientAdmin",JSON.stringify(action.payload))
      return {
        ...state,
        clientAdmin:action.payload
      };
    }
    default:
      return state;
  }
}
