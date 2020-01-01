import { Dispatch } from "redux";
import Axios from "axios";

//TODO: place constants in folder constants
export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Get user Profile Data
export const getUserProfile = (username: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: USER_REQUEST, username });
    //TODO: improve error handling here
    Axios.get('https://api.github.com/users/' + username).then((response => dispatch({ type: USER_SUCCESS, data: response.data }))).catch(error => dispatch({ type: USER_FAILURE, data: error }))
    // console.log(response)
    // return response
  }
}


export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})