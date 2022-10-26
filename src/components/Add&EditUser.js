import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  createData,
  editData,
  modalHandler,
} from "../store/actions/userAction";

const EditUser = () => {
  const [user, setUser] = useState({
    titleName: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    street: "",
    image: null,
  });

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);
  const userId = useSelector((state) => state.userReducer.userId);

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const changeHandlerImage = (event) => {
    setUser({
      ...user,
      image: event.target.files[0],
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const findData = userData.find((el) => el.email === user.email);
    user.id = uuidv4();
    if (userId) {
      if (userId === (findData && findData.id)) {
        dispatch(editData(user, userId, null));
      } else {
        dispatch(editData(user, userId, findData));
      }
    } else {
      dispatch(createData(user, findData));
    }
    modalHandler(false);
  };

  useEffect(() => {
    const findData = userData.find((el) => el.id === userId);
    if (findData) {
      setUser({
        titleName: findData.titleName,
        firstName: findData.firstName,
        lastName: findData.lastName,
        email: findData.email,
        country: findData.country,
        city: findData.city,
        street: findData.street,
        image: findData.image,
      });
    } else {
      setUser({
        titleName: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        city: "",
        street: "",
        image: null,
      });
    }
  }, [userData, userId]);

  return (
    <EditUserStyle>
      <div>
        <div className="add-user-container">
          <label className="add-user-img-container">
            {user.image ? (
              typeof user.image === "object" ? (
                <div>
                  <img
                    src={URL.createObjectURL(user.image)}
                    alt=""
                    className="fa-user"
                  />
                  {!userId && (
                    <input
                      type="file"
                      className="add-user-image"
                      onChange={changeHandlerImage}
                    />
                  )}
                </div>
              ) : (
                <div>
                  <img src={user.image} alt="" className="fa-user" />
                  {!userId && (
                    <input
                      type="file"
                      className="add-user-image"
                      onChange={changeHandlerImage}
                    />
                  )}
                </div>
              )
            ) : (
              <div>
                <i className="fa-solid fa-user"></i>
                <input
                  type="file"
                  className="add-user-image"
                  onChange={changeHandlerImage}
                />
              </div>
            )}
          </label>
        </div>
        <div className="add-user-container">
          <label>Title name:</label>
          <br />
          <input
            type="text"
            onChange={onChangeHandler}
            name="titleName"
            placeholder="Mr"
            value={user.titleName}
          />
        </div>
        <div className="add-user-container">
          <label>First name:</label>
          <br />
          <input
            type="text"
            onChange={onChangeHandler}
            name="firstName"
            placeholder="John"
            value={user.firstName}
          />
        </div>
        <div className="add-user-container">
          <label>Last name:</label>
          <br />
          <input
            type="text"
            onChange={onChangeHandler}
            name="lastName"
            placeholder="Cena"
            value={user.lastName}
          />
        </div>
        <div className="add-user-container">
          <label>Email:</label>
          <br />
          <input
            type="email"
            onChange={onChangeHandler}
            name="email"
            placeholder="cena@gmail.com"
            value={user.email}
          />
        </div>
        <div className="add-user-container">
          <label>Country:</label>
          <br />
          <input
            type="text"
            onChange={onChangeHandler}
            name="country"
            placeholder="Switzerland"
            value={user.country}
          />
        </div>
        <div className="add-user-container">
          <label>City:</label>
          <br />
          <input
            type="text"
            onChange={onChangeHandler}
            name="city"
            placeholder="Dörflingen"
            value={user.city}
          />
        </div>
        <div className="add-user-container">
          <label>Street:</label>
          <br />
          <input
            type="text"
            onChange={onChangeHandler}
            name="street"
            placeholder="Rue Duguesclin"
            value={user.street}
          />
        </div>
        <div className="add-user-btn">
          <button
            className="add-user-btn-cancel"
            onClick={() => dispatch(modalHandler(false))}
          >
            Cancel
          </button>
          <button className="add-user-btn-save" onClick={submitHandler}>
            Save
          </button>
        </div>
      </div>
    </EditUserStyle>
  );
};

export default EditUser;

const EditUserStyle = styled.div`
  .add-user-container {
    margin-top: 20px;
  }
  label {
    font-size: 20px;
    font-weight: 500;
  }
  .add-user-img-container {
    display: flex;
    justify-content: center;
  }
  .fa-user {
    width: 100px;
    height: 100px;
    border: 2px solid rgba(149, 157, 165, 0.2);
    cursor: pointer;
    font-size: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    :hover {
      background: purple;
      color: white;
    }
  }
  .add-user-image {
    display: none;
  }

  input {
    padding: 0 10px;
    border: 2px solid rgba(149, 157, 165, 0.2);
    font-size: 20px;
    border-radius: 3px;
    width: 95%;
    height: 40px;
    margin-top: 5px;
    &:focus {
      outline: none;
    }
  }

  .add-user-btn {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: no-wrap;
    @media only screen and (max-width: 700px) {
      flex-wrap: wrap;
    }
  }
  .add-user-btn-cancel {
    background: gray;
    color: white;
    font-size: 20px;
    padding: 10px 0px;
    width: 100%;
    border: 2px solid rgba(149, 157, 165, 0.2);
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
  }
  .add-user-btn-save {
    background: purple;
    color: white;
    font-size: 20px;
    padding: 10px 0px;
    width: 100%;
    border: 2px solid rgba(149, 157, 165, 0.2);
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
  }
`;
