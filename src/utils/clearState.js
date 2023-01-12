import userActions from "../redux/actions/profile";

export const clearState = (dispatch) => {
  dispatch(userActions.reset());
};
