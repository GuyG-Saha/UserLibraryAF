import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import AddBtn from "./components/AddBtn";
import UserList from "./components/UserList";
import AddEditUser from "./components/Add&EditUser";
import Modal from "./components/Modal";
import Tostify from "./components/Tostify";
import ConfirmDelete from "./components/ConfirmDelete";

const App = () => {
  const modal = useSelector((state) => state.userReducer.modal);
  const deleteModal = useSelector((state) => state.userReducer.deleteModal);

  return (
    <MainApp>
      <div className="topBar">
        <AddBtn />
      </div>
      <UserList />
      {modal && (
        <Modal>
          <AddEditUser />
        </Modal>
      )}
      {deleteModal && (
        <Modal deleteStyle>
          <ConfirmDelete />
        </Modal>
      )}
      <Tostify />
    </MainApp>
  );
};

export default App;

const MainApp = styled.div`
  width: 70%;
  margin: 100px auto;
  .topBar {
    display: flex;
    justify-content: end;
    @media only screen and (max-width: 800px) {
      justify-content: center;
    }
  }
`;
