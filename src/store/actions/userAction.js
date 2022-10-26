import * as Types from "../constants/UserType";
import axios from "axios";
import alertAction from "./alertAction";
import { userValidation } from "../../validations/userValidation";

export const getData = () => (dispatch) => {
  axios
    .get("https://randomuser.me/api/?results=10")
    .then((response) => {
      dispatch({
        type: Types.GET_DATA,
        payload: response.data.results,
      });
    })
    .catch((error) => {
      dispatch({
        type: Types.GET_DATA_ERROR,
        payload: error.message,
      });
    });
};

export const createData = (user, findData) => (dispatch) => {
  if (!findData) {
    const validation = userValidation(user);
    if (validation.isValid) {
      dispatch({
        type: Types.CREATE_DATA,
        payload: user,
      });
      dispatch(alertAction({ success: "Data Updated Successfully" }));
    } else {
      dispatch(alertAction(validation.error));
    }
  } else {
    dispatch(alertAction({ success: "User already exists" }));
  }
};

export const editData = (user, id, findData) => (dispatch) => {
  if (!findData) {
    const validation = userValidation(user);
    if (validation.isValid) {
      dispatch({
        type: Types.UPDATE_DATA,
        payload: {
          user,
          id,
        },
      });
      userValidation(user);
      dispatch(alertAction({ success: "Data Updated Successfully" }));
    } else {
      dispatch(alertAction(validation.error));
    }
  } else {
    dispatch(alertAction({ success: "User already exists" }));
  }
};

export const deleteData = () => (dispatch) => {
  dispatch({
    type: Types.DELETE_DATA,
  });
  dispatch(alertAction({ success: "Data Deleted Successfully" }));
};

export const modalHandler = (value, id) => (dispatch) => {
  dispatch({
    type: Types.MODAL_TOGGLE,
    payload: {
      modal: value,
      id: id,
    },
  });
};

export const deleteModal = (value, id) => (dispatch) => {
  dispatch({
    type: Types.DELETE_MODAL_TOGGLE,
    payload: {
      modal: value,
      id: id,
    },
  });
};