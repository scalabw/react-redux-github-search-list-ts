import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ROUTES } from "./routes";
import { CONFIG } from "./config";
//
//////////////////
// API_ENDPOINT //
//////////////////
const API_ENDPOINT: AxiosRequestConfig = {
  baseURL: CONFIG.ENDPOINT,
  timeout: CONFIG.TIMEOUT,
  headers: {}
};

//////////////////
// API_RESPONSE //
//////////////////
export type API_RESPONSE = {
  data: object; // JSON received
  error: string;
  status: number;
  isError: boolean;
};

const API_RESPONSE_SUCCESS = (responseServer: AxiosResponse): API_RESPONSE => {
  return {
    data: responseServer.data,
    error: "",
    isError: false,
    status: responseServer.status
  } as API_RESPONSE;
};

// If API_RESPONSE.status === 1 then an unsuspected error occured
const API_RESPONSE_ERROR = (responseServer: any): API_RESPONSE => {
  if (responseServer.response) {
    // This is an error send by the server
    return {
      data: {},
      error: responseServer.response.data,
      isError: true,
      status: responseServer.response.status
    } as API_RESPONSE;
  } else if (responseServer.request) {
    // No response received from the server
    return {
      data: {},
      error: responseServer.request,
      isError: true,
      status: -1
    } as API_RESPONSE;
  } else {
    // Something happened in setting up the request that triggered an error
    return {
      data: {},
      error: responseServer.message,
      isError: true,
      status: -1
    } as API_RESPONSE;
  }
};

/////////////////////
// REQUEST METHODS //
/////////////////////
const POST = (route: ROUTES, data: any, token?: string): Promise<API_RESPONSE> => {
  let config: AxiosRequestConfig = API_ENDPOINT;
  config.headers = token ? { auth: token } : null;

  return Axios.post(route, data, config)
    .then((responseServer: any) => {
      return API_RESPONSE_SUCCESS(responseServer);
    })
    .catch((responseServer: any) => {
      return API_RESPONSE_ERROR(responseServer);
    });
};
const GET = (mainRoute: ROUTES, additionalRoute?: string, token?: string): Promise<API_RESPONSE> => {
  let config: AxiosRequestConfig = API_ENDPOINT;
  config.headers = token ? { auth: token } : null;

  let route: string = mainRoute;
  if (additionalRoute !== undefined) {
    route = mainRoute + additionalRoute;
  }
  return Axios.get(route, config)
    .then((responseServer: any) => {
      return API_RESPONSE_SUCCESS(responseServer);
    })
    .catch((responseServer: any) => {
      return API_RESPONSE_ERROR(responseServer);
    });
};
const PATCH = (mainRoute: ROUTES, data: any, additionalRoute?: string, token?: string): Promise<API_RESPONSE> => {
  let config: AxiosRequestConfig = API_ENDPOINT;
  config.headers = token ? { auth: token } : null;

  let route: string = mainRoute;
  if (additionalRoute !== undefined) {
    route = mainRoute + additionalRoute;
  }
  return Axios.patch(route, data, config)
    .then((responseServer: any) => {
      return API_RESPONSE_SUCCESS(responseServer);
    })
    .catch((responseServer: any) => {
      return API_RESPONSE_ERROR(responseServer);
    });
};
const DELETE = (mainRoute: ROUTES, additionalRoute?: string, token?: string): Promise<API_RESPONSE> => {
  let config: AxiosRequestConfig = API_ENDPOINT;
  config.headers = token ? { auth: token } : null;

  let route: string = mainRoute;
  if (additionalRoute !== undefined) {
    route = mainRoute + additionalRoute;
  }
  return Axios.delete(route, config)
    .then((responseServer: any) => {
      return API_RESPONSE_SUCCESS(responseServer);
    })
    .catch((responseServer: any) => {
      return API_RESPONSE_ERROR(responseServer);
    });
};

export const METHODS = {
  GET,
  POST,
  PATCH,
  DELETE
};
