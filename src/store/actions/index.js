import { ADD_ROUTER } from "./actionTypes";


export const addRouter = (content) =>{
  return  ({
    type: ADD_ROUTER,
    payload:content
  })
}