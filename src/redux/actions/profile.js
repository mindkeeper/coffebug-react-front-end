import { editProfile, getProfile } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

export const editProfileAction = (body, token) => {
  return {
    type: ACTION_STRING.getProfile,
    payload: editProfile(body, token),
  };
};

export const getProfileActions = () => {
  return {
    type: ACTION_STRING.getProfile,
    payload: getProfile(),
  };
};
