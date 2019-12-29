import * as ActionTypes from '../actions'

import { combineReducers } from 'redux'

export interface IRepositoryData {
  users: {}, repos: {}, error: {}
}

// Updates an entity cache in response to any action with response.entities.
const entities = (state: IRepositoryData = { users: {}, repos: {}, error: {} }, action: any): IRepositoryData => {
  switch (action.type) {
    // GET USER DATA
    case ActionTypes.USER_REQUEST:
      return {
        ...state,
        error: action.data
      };
    case ActionTypes.USER_SUCCESS:
      return {
        ...state,
        users: action.data
      };
    case ActionTypes.USER_FAILURE:
      return {
        ...state,
        users: {}
      };

    default:
      return state
  }
}

// Updates error message to notify about the failed fetches.
// const errorMessage = (state = null, action: any) => {
//   const { type, error } = action
//   console.log(action)
//   if (type === ActionTypes.RESET_ERROR_MESSAGE) {
//     return null
//   } else if (error) {
//     return error
//   }
//   return state
// }


const rootReducer = combineReducers({
  entities,
  //  errorMessage,
})

export default rootReducer
