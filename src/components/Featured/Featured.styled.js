import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 80px 20px;
  text-align: center;
  h3 {
    font-weight: 400;
    margin-bottom: 80px;
  }
  Button {
    color: #fff;
    background-color: #222;
    font-size: 16px;
    margin-top: 70px;
    padding: 8px 12px;
    border: 1px solid transparent;
    &:hover {
      color: #222;
      background-color: #fff;
      border: 1px solid #222;
    }
  }
`;
export const Content = styled.div`
  width: 60%;
  margin: 0 auto;
`;
export const FeaturedBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;
export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Describe = styled.div`
  padding: 0 30px;
  text-align: left;
  h3 {
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.3;
    letter-spacing: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
`;
export const FeaturedLink = styled(Link)`
  color: #000;
  font-size: 14px;
  text-decoration: none;
  border-bottom: 1px solid #000;
  transition: 0.2s;
  padding-bottom: 2px;
  &:hover {
    border-bottom: 1px solid transparent;
  }
`;
