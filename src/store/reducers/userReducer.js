import * as Types from "../constants/UserType";

const init = {
  userData: [],
  error: "",
  modal: false,
  userId: "",
  deleteModal: false,
  deleteModalId: "",
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_DATA: {
      const temp = [];
      action.payload.forEach((el) => {
        const userObj = {
          id: el.login.uuid,
          image: el.picture.medium,
          titleName: el.name.title,
          firstName: el.name.first,
          lastName: el.name.last,
          email: el.email,
          country: el.location.country,
          city: el.location.city,
          street: el.location.street.name,
        };
        temp.push(userObj);
      });
      return {
        ...state,
        userData: temp,
        error: "",
      };
    }

    case Types.GET_DATA_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.CREATE_DATA: {
      const temp = [...state.userData];
      const userObj = {
        id: action.payload.id,
        image: action.payload.image,
        titleName: action.payload.titleName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        country: action.payload.country,
        city: action.payload.city,
        street: action.payload.street,
      };
      temp.unshift(userObj);
      return {
        ...state,
        userData: temp,
        error: "",
        modal: false,
      };
    }

    case Types.UPDATE_DATA: {
      const temp = [...state.userData];
      const findIndex = temp.findIndex((el) => el.id === action.payload.id);
      temp[findIndex] = action.payload.user;
      return {
        ...state,
        userData: temp,
        error: "",
        modal: false,
      };
    }

    case Types.DELETE_DATA: {
      const temp = [...state.userData];
      const finalArr = temp.filter((el) => el.id !== state.deleteModalId);
      return {
        ...state,
        userData: finalArr,
        deleteModal: false,
        error: "",
      };
    }

    case Types.MODAL_TOGGLE: {
      return {
        ...state,
        modal: action.payload.modal,
        userId: action.payload.id,
      };
    }

    case Types.DELETE_MODAL_TOGGLE: {
      return {
        ...state,
        deleteModal: action.payload.modal,
        deleteModalId: action.payload.id,
      };
    }
    default:
      return state;
  }
};

export default reducer;
