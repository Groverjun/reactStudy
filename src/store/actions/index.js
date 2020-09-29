import { ADD_ROUTER,USER_DATA } from "./actionTypes";


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