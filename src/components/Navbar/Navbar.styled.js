import styled from "styled-components";

export const Nav = styled.div`
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  border-bottom: .5px solid #000;
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 30px;
  height: 100%;
`;
export const NavLogo = styled.div`
  display: inline-block;
  font-size: 35px;
  font-weight: 400;
  color: #333;
  cursor: pointer; ;
`;
export const NavMenu = styled.div`
  width: 100%;
  margin: 0 40px;
  margin-right: 20px;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    min-height: 80px;
    li {
      text-align: center;
      font-size: 13px;
      font-weight: 100;
      color: #333;
      list-style: none;
      margin: 0 20px;

      .navLink {
        text-decoration: none;
        transition: 0.3s;
        color: #666;
        font-weight: 300;
        border-bottom: 0.5px solid #fff;
        &:hover {
          border-bottom: 0.5px solid #000;
          color: #000;
        }
      }
    }
  }
`;
export const NavIcons = styled.div`
  display: flex;
  flex-direction: row;

  .NavIcon {
    font-size: 18px;
    cursor: pointer;
    margin: 0 15px;
    transition: 0.2s;
    color: #666;
    &:hover {
      color: #000;
    }
  }
`;
