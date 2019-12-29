import { Dispatch } from "redux";

import * as APICalls from "../API";
import { API_RESPONSE } from "../API/api_common";
import Axios from "axios";

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Get user Profile Data
export const getUserProfile = (username: string) => {

  const request = (username: string) => {
    return { type: USER_REQUEST, username };
  };
  // TODO: create clear dipatch type here
  return (dispatch: Dispatch) => {
    dispatch(request(username));
    Axios.get('https://api.github.com/users/' + username).then((response => dispatch({ type: USER_SUCCESS, data: response.data }))).catch(error => dispatch({ type: USER_FAILURE, data: error }))
    // console.log(response)
    //return response
  }
}


export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})