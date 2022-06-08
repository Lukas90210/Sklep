import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #fff;
  border: none;
  transition: 0.2s;
  cursor: pointer;
  padding: 8px 12px;
  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

export const Button = ({ children, onClick, type }) => (
  <>
    <Btn onClick={onClick} type={type}>
      {children}
    </Btn>
  </>
);

export default Button;
