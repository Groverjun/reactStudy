import { ADD_ROUTER,USER_DATA,CLIENT_ADMIN } from "./actionTypes";


export const addRouter = (content) =>{
  return  ({
    type: ADD_ROUTER,
    payload:content
  })
}

export const userData = (content) =>{
  return  ({
    type: USER_DATA,
    payload:content
  })
}

export const clientData = (content) =>{
  return  ({
    type: CLIENT_ADMIN,
    payload:content
  })
}