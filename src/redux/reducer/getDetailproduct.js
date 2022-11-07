import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  product: [],
  isError: false,
  isLoading: false,
  error: null,
};

export const getDetailProductReducer = (prevState = initialState, action) => {
  const { getDetailProduct } = ACTION_STRING;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getDetailProduct.concat("_", Pending):
      return {
        ...prevState,
        isError: false,
        isLoading: true,
      };
    case getDetailProduct.concat("_", Rejected):
      const errRes = action.payload.response.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: errRes,
      };
    case getDetailProduct.concat("_", Fulfilled):
      const response = action.payload.data.data;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        product: response,
      };

    default:
      return prevState;
  }
};
