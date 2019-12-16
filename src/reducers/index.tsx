import * as ActionTypes from '../actions'

import { combineReducers } from 'redux'
import { merge } from 'lodash'


// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action: any) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action: any) => {
  const { type, error } = action

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
