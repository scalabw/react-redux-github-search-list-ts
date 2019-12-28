import { Dispatch } from "redux";

import * as APICalls from "../API";
import { API_RESPONSE } from "../API/api_common";

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Get user Profile Data
export const getUserProfile = (username: string) => {

  const request = (username: string) => {
    console.log('ta mere la pute')
    return { type: USER_REQUEST, username };
  };
  //  return axios.get(`${API_ROOT}users/${userName}`)
  // TODO: create clear dipatch type here
  console.log("test")
  return async (dispatch: Dispatch) => {
    dispatch(request(username));
    const response: API_RESPONSE = await APICalls.getUserProfile(username)
    console.log(response)
    //request.then((response => dispatch({ type: USER_SUCCESS, data: response.data }))).catch(error => error)
    return request
  }
}


export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})