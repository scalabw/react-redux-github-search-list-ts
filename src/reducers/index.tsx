import * as ActionTypes from '../actions'

import { combineReducers } from 'redux'

export interface IRepositoryData {
  user: {}, repos: {}, error: {}, loading: boolean
}

// Updates an entity cache in response to any action with response.entities.
const entities = (state: IRepositoryData = { user: {}, repos: {}, error: {}, loading: false }, action: any): IRepositoryData => {
  switch (action.type) {
    // GET USER DATA
    case ActionTypes.USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false
      };
    case ActionTypes.USER_FAILURE:
      return {
        ...state,
        user: {},
        loading: false
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
