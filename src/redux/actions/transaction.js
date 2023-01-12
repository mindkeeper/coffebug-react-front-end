import { ACTION_STRING } from "./actionStrings";

const { addToCart } = ACTION_STRING;

const cart = (data) => {
  return {
    type: addToCart,
    payload: { data },
  };
};

const transactionActions = {
  cart,
};

export default transactionActions;
