import { ACTION_STRING } from "./actionStrings";
import {
  getProducts as apiGetProducts,
  getProductDetail,
} from "../../utils/fetcher";
const {
  getProducts,
  getDetailProduct,
  updateProducts,
  createProduct,
  pending,
  rejected,
  fulfilled,
} = ACTION_STRING;

const getProductsPending = () => ({
  type: getProducts.concat(pending),
});

const getProductsRejected = (error) => ({
  type: getProducts.concat(rejected),
  payload: { error },
});

const getProductsFulfilled = (data) => ({
  type: getProducts.concat(fulfilled),
  payload: { data },
});

const getDetailProductPending = () => ({
  type: getDetailProduct.concat(pending),
});

const getDetailProductRejected = (error) => ({
  type: getDetailProduct.concat(rejected),
  payload: { error },
});

const getDetailProductFulfilled = (data) => ({
  type: getDetailProduct.concat(fulfilled),
  payload: { data },
});

const getProductsThunk = (query, cbSuccess, cbDenied) => async (dispatch) => {
  try {
    dispatch(getProductsPending());
    const result = await apiGetProducts(query);
    dispatch(getProductsFulfilled(result.data));
    typeof cbSuccess === "function" && cbSuccess();
  } catch (error) {
    console.log(error);
    dispatch(getProductsRejected(error));
    typeof cbDenied === "function" && cbDenied();
  }
};

const getDetailProductThunk = (id, cbSuccess, cbDenied) => async (dispatch) => {
  try {
    dispatch(getDetailProductPending());
    const result = await getProductDetail(id);
    dispatch(getDetailProductFulfilled(result.data));
    typeof cbSuccess === "function" && cbSuccess();
  } catch (error) {
    console.log(error);
    dispatch(getDetailProductRejected(error));
    typeof cbDenied === "function" && cbDenied();
  }
};

const productActions = {
  getProductsThunk,
  getDetailProductThunk,
};
export default productActions;
