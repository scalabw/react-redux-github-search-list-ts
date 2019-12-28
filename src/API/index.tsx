import { API_RESPONSE, METHODS } from "./api_common";
import { ROUTES } from "./routes";

export const getUserProfile = async (username: string): Promise<API_RESPONSE> => {
  console.log("not stuck")
  return METHODS.GET(ROUTES.USERS, username)
}