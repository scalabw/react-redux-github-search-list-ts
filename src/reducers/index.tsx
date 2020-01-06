import { ActionsTypes } from "../constants/actionsConstants";

import { IUser, IRepository } from "../constants/userConstants";

export interface IEntitiesData {
  user?: IUser;
  repositories?: IRepository[];
  error: {};
  loading: boolean;
}

// Updates an entity cache in response to any action with response.entities.
const entities = (
  state: IEntitiesData = {
    user: undefined,
    repositories: undefined,
    error: {},
    loading: false
  },
  action: any
): IEntitiesData => {
  switch (action.type) {
    // GET USER PROFILE DATA
    case ActionsTypes.GET_USER_PROFILE_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ActionsTypes.GET_USER_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false
      };
    case ActionsTypes.GET_USER_PROFILE_DATA_FAILURE:
      return {
        ...state,
        user: undefined,
        loading: false
      };
    // GET USER REPOSITORIES DATA
    case ActionsTypes.GET_USER_REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ActionsTypes.GET_USER_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.data,
        loading: false
      };
    case ActionsTypes.GET_USER_REPOSITORIES_FAILURE:
      return {
        ...state,
        repositories: undefined,
        loading: false
      };

    default:
      return state;
  }
};

export default entities;
