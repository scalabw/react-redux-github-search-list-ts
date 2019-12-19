import axios from "axios"

const API_ROOT = 'https://api.github.com/'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Get user Profile Data
export const getUserProfile = (userName: string) => {
  return axios.get(`${API_ROOT}users/${userName}`)
  // TODO: create clear dipatch type here
  // return (dispatch: any) => {
  //   const request = axios.get(`${API_ROOT}users/${userName}`)
  //   request.then((response => dispatch({ type: USER_SUCCESS, data: response.data }))).catch(error => error)
  //   return request
  // }
}


export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})