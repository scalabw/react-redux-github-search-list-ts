import * as ActionTypes from '../actions'

import { combineReducers } from 'redux'

export interface IRepositoryData {
  users: {}, repos: {}
}

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action: any) => {
  console.log(action)
  console.error("yess")
  return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action: any) => {
  const { type, error } = action
  console.log(action)
  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}


const rootReducer = combineReducers({
  entities,
  errorMessage,
})

export default rootReducer
