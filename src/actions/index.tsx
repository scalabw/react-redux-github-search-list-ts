import axios from "axios"

const API_ROOT = 'https://api.github.com/'

// Get user Profile Data
export const GetUserProfile = (userName: string) => {
  //TODO: create clear dipatch type here
  return (disptach: any) => {
    return axios.get(API_ROOT + 'scalabw')
  }
}


export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})