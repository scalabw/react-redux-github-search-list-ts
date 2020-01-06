import { Dispatch } from "redux";
import Axios from "axios";
import { BaseAPI } from "../constants/ApiConstants";
import { ActionsTypes } from "../constants/actionsConstants";

// Get User Profile Data
export const getUserProfile = (username: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionsTypes.GET_USER_PROFILE_DATA_REQUEST, username });
    Axios.get(BaseAPI + username)
      .then(response =>
        dispatch({
          type: ActionsTypes.GET_USER_PROFILE_DATA_SUCCESS,
          data: response.data
        })
      )
      .catch(error =>
        dispatch({
          type: ActionsTypes.GET_USER_PROFILE_DATA_FAILURE,
          data: error
        })
      );
  };
};

// Get User Repositories Data
export const getUserRepositories = (username: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionsTypes.GET_USER_REPOSITORIES_REQUEST, username });
    Axios.get(BaseAPI + username + "/repos?per_page=1000")
      .then(response =>
        dispatch({
          type: ActionsTypes.GET_USER_REPOSITORIES_SUCCESS,
          data: response.data
        })
      )
      .catch(error =>
        dispatch({
          type: ActionsTypes.GET_USER_REPOSITORIES_FAILURE,
          data: error
        })
      );
  };
};
