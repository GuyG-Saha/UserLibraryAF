import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteData, deleteModal } from "../store/actions/userAction";

const ConfirmDelete = () => {
  const dispatch = useDispatch();

  return (
    <ConfirmMsg>
      <p>Are you sure you want to delete?</p>
      <div className="add-user-btn">
        <button
          className="add-user-btn-cancel"
          onClick={() => dispatch(deleteModal())}
        >
          No
        </button>
        <button
          className="add-user-btn-save"
          onClick={() => dispatch(deleteData())}
        >
          Yes
        </button>
      </div>
    </ConfirmMsg>
  );
};

export default ConfirmDelete;

const ConfirmMsg = styled.div`
  p {
    font-size: 30px;
    text-align: center;
    margin-bottom: 100px;
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
