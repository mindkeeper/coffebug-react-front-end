import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isLoading: false,
  isError: false,
  cart: {
    productId: "",
    price: "",
    image: "",
    productName: "",
    sizeId: "",
    qty: 0,
    promoId: "1",
    deliveryId: "",
    paymentId: "",
    subtotal: 0,
  },
};

const transactionReducer = (prevState = initialState, { type, payload }) => {
  const { addToCart, pending, rejected, fulfilled } = ACTION_STRING;

  switch (type) {
    case addToCart:
      return {
        ...prevState,
        cart: {
          productId: payload.data.productId,
          price: payload.data.price,
          image: payload.data.image,
          productName: payload.data.productName,
          qty: payload.data.qty || 0,
          sizeId: payload.data.sizeId,
          promoId: "1",
          deliveryId: payload.data.deliveryId || "",
          paymentId: payload.data.paymentId || "",
          subtotal: payload.data.subtotal || 0,
        },
      };

    default:
      return prevState;
  }
};

export default transactionReducer