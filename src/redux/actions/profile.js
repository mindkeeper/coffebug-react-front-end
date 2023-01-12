import { editProfile, getProfile as apiGetProfile } from "../../utils/fetcher";
import { ACTION_STRING } from "./actionStrings";

const {
  getProfile,
  updateProfile,
  resetProfile,
  pending,
  rejected,
  fulfilled,
} = ACTION_STRING;

const getProfilePending = () => ({
  type: getProfile.concat(pending),
});

const getProfileRejected = (error) => ({
  type: getProfile.concat(rejected),
  payload: { error },
});

const getProfileFulfilled = (data) => ({
  type: getProfile.concat(fulfilled),
  payload: { data },
});

const editProfilePending = () => ({
  type: updateProfile.concat(pending),
});

const editProfileRejected = (error) => ({
  type: updateProfile.concat(rejected),
  payload: { error },
});

const editProfileFulfilled = (data) => ({
  type: updateProfile.concat(fulfilled),
  payload: { data },
});

const getProfileThunk = (token, cbSuccess, cbDenied) => async (dispatch) => {
  try {
    dispatch(getProfilePending());
    const result = await apiGetProfile(token);
    dispatch(getProfileFulfilled(result.data));
    typeof cbSuccess === "function" && cbSuccess();
  } catch (error) {
    console.log(error);
    dispatch(getProfileRejected(error));
    typeof cbDenied === "function" && cbDenied();
  }
};

const editProfileThunk =
  (body, token, cbSuccess, cbDenied) => async (dispatch) => {
    try {
      dispatch(editProfilePending());
      const result = await editProfile(body, token);
      dispatch(editProfileFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      console.log(error);
      dispatch(editProfileRejected(error));
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };

const reset = () => {
  return { type: resetProfile };
};

const userActions = {
  getProfileThunk,
  editProfileThunk,
  reset,
};

export default userActions;
