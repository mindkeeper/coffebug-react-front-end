import { getData } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

export const getDetailProductAction = (id) => {
  return {
    type: ACTION_STRING.getDetailProduct,
    payload: getData(`/products/${id}`),
  };
};
