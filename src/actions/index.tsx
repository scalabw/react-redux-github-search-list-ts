import { Dispatch } from "redux";
import Axios from "axios";

//TODO: place constants in folder constants
export const GET_USER_PROFILE_DATA_REQUEST = 'GET_USER_PROFILE_DATA_REQUEST'
export const GET_USER_PROFILE_DATA_SUCCESS = 'GET_USER_PROFILE_DATA_SUCCESS'
export const GET_USER_PROFILE_DATA_FAILURE = 'GET_USER_PROFILE_DATA_FAILURE'

// Get User Profile Data
export const getUserProfile = (username: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_USER_PROFILE_DATA_REQUEST, username });
    Axios.get('https://api.github.com/users/' + username).then((response => dispatch({ type: GET_USER_PROFILE_DATA_SUCCESS, data: response.data }))).catch(error => dispatch({ type: GET_USER_PROFILE_DATA_FAILURE, data: error }))
  }
}

export const GET_USER_REPOSITORIES_REQUEST = "GET_USER_REPOSITORIES_REQUEST"
export const GET_USER_REPOSITORIES_SUCCESS = "GET_USER_REPOSITORIES_SUCCESS"
export const GET_USER_REPOSITORIES_FAILURE = "GET_USER_REPOSITORIES_FAILURE"
// Get User Repositories Data
export const getUserRepositories = (username: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_USER_REPOSITORIES_REQUEST, username });
    Axios.get('https://api.github.com/users/' + username + "/repos").then((response => dispatch({ type: GET_USER_REPOSITORIES_SUCCESS, data: response.data }))).catch(error => dispatch({ type: GET_USER_REPOSITORIES_FAILURE, data: error }))
  }
}