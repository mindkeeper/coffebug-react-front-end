import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  profile: [],
  isError: false,
  isLoading: false,
  error: null,
};

export const profileReducer = (prevState = initialState, action) => {
  const { getProfile } = ACTION_STRING;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isError: false,
        isLoading: true,
      };
    case getProfile.concat("_", Rejected):
      const getProfileError = action.payload.response.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: getProfileError,
      };
    case getProfile.concat("_", Fulfilled):
      const getSuccess = action.payload.data.data[0];
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        profile: getSuccess,
      };
    default:
      return prevState;
  }
};
