import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://source.unsplash.com/random/2560x1441");
  background-size: cover;
  background-position: center center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  color: #fff;
  padding: 100px 0;
  h4 {
    font-weight: 400;
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 400;
    margin-bottom: 30px;
    text-align: center;
  }
  p {
    font-weight: 100;
    font-size: 14px;
    text-align: center;
    margin-bottom: 30px;
  }
`;
export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  input {
    width: 100%;
    font-size: 14px;
    padding: 13px 14px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    outline: none;
    &::placeholder {
      color: #fff;
    }
  }

  Button {
    font-size: 14px;
    margin-left: 20px;
    padding: 7px 10px;
    &:hover {
      color: #fff;
    }
  }
`;
