import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  promos: [],
  isError: false,
  isLoading: false,
  error: null,
};

export const getPromosReducer = (prevState = initialState, action) => {
  const { getPromos } = ACTION_STRING;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getPromos.concat("_", Pending):
      return {
        isLoading: true,
        isError: false,
      };
    case getPromos.concat("_", Rejected):
      const errRes = action.payload.response.data.msg;
      return {
        isLoading: false,
        isError: true,
        error: errRes,
      };
    case getPromos.concat("_", Fulfilled):
      const response = action.payload.data;
      return {
        isLoading: false,
        isError: false,
        promos: response.data,
      };

    default:
      return prevState;
  }
};
