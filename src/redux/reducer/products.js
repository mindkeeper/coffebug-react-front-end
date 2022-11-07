import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  product: [],
  meta: { totalPage: null },
  isError: false,
  isLoading: false,
  error: null,
};

export const productsReducer = (prevState = initialState, action) => {
  const { getProducts } = ACTION_STRING;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getProducts.concat("_", Pending):
      return {
        ...prevState,
        isError: false,
        isLoading: true,
      };
    case getProducts.concat("_", Rejected):
      const getError = action.payload.response.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: getError,
      };
    case getProducts.concat("_", Fulfilled):
      const response = action.payload.data;
      return {
        ...prevState,
        isError: false,
        isLoading: false,
        product: response.data,
        meta: { totalPage: response.meta.totalPage },
      };
    default:
      return prevState;
  }
};
