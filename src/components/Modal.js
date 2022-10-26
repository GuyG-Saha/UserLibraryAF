import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalHandler, deleteModal } from "../store/actions/userAction";

const Modal = ({ children, deleteStyle }) => {
  const dispatch = useDispatch();

  return (
    <ModalStyle>
      <div className="main-modal">
        <div className={deleteStyle ? "deleteModal" : "modal"}>
          <i
            className="fa-solid fa-circle-xmark modal-cross"
            onClick={() => {
              dispatch(modalHandler(false));
              dispatch(deleteModal(false));
            }}
          ></i>
          <div>{children}</div>
        </div>
        <div className="modal-overlay"></div>
      </div>
    </ModalStyle>
  );
};

export default Modal;

const ModalStyle = styled.div`
  .main-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .modal {
    padding: 30px;
    background: #ffffff;
    border: 1px solid rgba(149, 157, 165, 0.2);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 20px;
    position: relative;
    margin: 20px auto;
    z-index: 50;
    width: 50%;
    height: 80%;
    overflow: hidden;
    overflow-y: scroll;
    @media only screen and (max-width: 800px) {
      width: 80%;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .deleteModal {
    padding: 30px;
    background: #ffffff;
    border: 1px solid rgba(149, 157, 165, 0.2);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 20px;
    position: relative;
    margin: 20px auto;
    z-index: 50;
    width: 50%;
    height: 200px;
    overflow: hidden;
    overflow-y: scroll;
    @media only screen and (max-width: 800px) {
      width: 80%;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000000;
    opacity: 0.5;
  }
  .modal-cross {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    font-size: 20px;
  }
`;
