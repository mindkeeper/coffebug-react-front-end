import { getData } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

export const getPromosAction = () => {
  return {
    type: ACTION_STRING.getPromos,
    payload: getData("/promos"),
  };
};
