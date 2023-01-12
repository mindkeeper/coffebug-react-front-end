import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  profile: {},
  isError: false,
  isLoading: false,
  error: null,
};

export const profileReducer = (prevState = initialState, { type, payload }) => {
  const { getProfile, updateProfile, resetProfile } = ACTION_STRING;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (type) {
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isError: false,
        isLoading: true,
      };
    case getProfile.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.response.data.msg,
      };
    case getProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        profile: payload.data.data,
      };

    case updateProfile.concat("_", Pending):
      return {
        ...prevState,
        isError: false,
        isLoading: true,
      };
    case updateProfile.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.response.data.msg,
      };
    case updateProfile.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        profile: { ...prevState.profile, ...payload.data.data },
      };

    case resetProfile:
      return initialState;

    default:
      return prevState;
  }
};
