import { getData, postData } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

export const getProductsAction = (params) => {
  return {
    type: ACTION_STRING.getProducts,
    payload: getData("/products", params),
  };
};

export const updateProductAction = (id) => {
  return {
    type: ACTION_STRING.updateProducts,
  };
};

export const addProductActions = (token, body) => {
  return {
    type: ACTION_STRING.createProduct,
    payload: postData(token, body),
  };
};
