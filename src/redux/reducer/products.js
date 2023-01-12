import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  products: [],
  pagination: {},
  isError: false,
  isLoading: false,
  error: null,
  detail: {
    id: null,
    product_name: "",
    price: null,
    image: "",
    category_name: "",
    description: "",
    sold: "",
  },
};

const productsReducer = (prevState = initialState, { type, payload }) => {
  const { getProducts, getDetailProduct, pending, rejected, fulfilled } =
    ACTION_STRING;

  switch (type) {
    case getProducts.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case getProducts.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case getProducts.concat(fulfilled):
      return {
        ...prevState,
        isLoading: false,
        products: payload.data.data,
        pagination: payload.data.meta,
      };
    case getDetailProduct.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case getDetailProduct.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case getDetailProduct.concat(fulfilled):
      return {
        ...prevState,
        isLoading: false,
        detail: {
          id: payload.data.data.id,
          product_name: payload.data.data.product_name,
          price: payload.data.data.price,
          image: payload.data.data.image,
          category_name: payload.data.data.category_name,
          description: payload.data.data.description,
          sold: payload.data.data.sold,
        },
      };
    default:
      return prevState;
  }
};

export default productsReducer;
