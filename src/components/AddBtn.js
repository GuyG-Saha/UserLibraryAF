import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { modalHandler } from "../store/actions/userAction";

const AddBtn = () => {
  const dispatch = useDispatch();

  return (
    <Button primary onClick={() => dispatch(modalHandler(true))}>
      Add user
    </Button>
  );
};

export default AddBtn;

const Button = styled.button`
  background: purple;
  color: white;
  font-size: 20px;
  padding: 15px 100px;
  border: 2px solid rgba(149, 157, 165, 0.2);
  border-radius: 3px;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
