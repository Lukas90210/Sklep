import { Link } from "react-router-dom";
import { Container } from "./Header.styled";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: 0.2s;
  background-color: #222;
  padding: 8px 12px;
  &:hover {
    color: #333;
    background-color: #fff;
  }
`;

function Header() {
  return (
    <>
      <Container>
        <div>
          <p>Welcome to Goodies</p>
          <h2>Discover our passion</h2>
            <StyledLink to="/Demo">Home</StyledLink>
        </div>
      </Container>
    </>
  );
}

export default Header;
