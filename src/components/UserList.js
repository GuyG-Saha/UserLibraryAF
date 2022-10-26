import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  deleteModal,
  modalHandler,
} from "../store/actions/userAction";
import styled from "styled-components";

const UserList = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      {userData.length ? (
        userData.map((el) => (
          <List key={el.id}>
            <div className="list-Left">
              {typeof el.image === "object" ? (
                <img src={URL.createObjectURL(el.image)} alt="" />
              ) : (
                <img src={el.image} alt="" />
              )}
              <p className="user-name">{`${el.titleName} ${el.firstName} ${el.lastName}`}</p>
            </div>
            <div className="add-user-medium">
              <p className="user-mail">{el.email}</p>
              <p>
                {el.country}, {el.city}, {el.street}
              </p>
            </div>
            <div className="list-action">
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => dispatch(modalHandler(true, el.id))}
              ></i>
              <i
                className="fa-solid fa-trash"
                onClick={() => dispatch(deleteModal(true, el.id))}
              ></i>
            </div>
          </List>
        ))
      ) : (
        <p style={{ fontSize: "30px", textAlign: "center", marginTop: "50px" }}>
          No data found
        </p>
      )}
    </div>
  );
};

export default UserList;

const List = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .list-Left {
    width: 25%;
    @media only screen and (max-width: 800px) {
      text-align: center;
      width: 100%;
    }
  }
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .add-user-medium {
    width: 60%;
    @media only screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
    }
  }
  .user-name {
    font-size: 24px;
    font-weight: 500;
  }
  .user-mail {
    font-size: 20px;
    font-weight: 500;
  }
  .list-action {
    font-size: 20px;
  }
  .fa-pen-to-square {
    cursor: pointer;
  }
  .fa-trash {
    margin-left: 20px;
    cursor: pointer;
  }
`;
