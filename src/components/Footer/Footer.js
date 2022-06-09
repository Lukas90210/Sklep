import { ListWrapper, ListItem, Describe, Icons, Form } from "./Footer.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Button from "../Button/ButtonPrimary";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #666;
  transition: 0.2s;
  &:hover {
    color: #000;
  }
`;

const EmailLink = styled(Link)`
  text-decoration: none;
  color: #555;
  transition: 0.2s;
  border-bottom: 1px solid #555;
  font-size: 13px;
  &:hover {
    color: #000;
    border-bottom: 1px solid transparent;
  }
`;

function Footer() {
  return (
    <>
      <ListWrapper>
        <ListItem>
          <p>SIGN UP AND GET 10% OFF ON YOUR FIRST ORDER.</p>
          <ul>
            <li>
              <p>
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
            </li>
          </ul>
          <Form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
          </Form>
          <Button>Subscribe</Button>
        </ListItem>

        <ListItem>
          <p>ABOUT</p>
          <ul>
            <li>
              <StyledLink>Our Story</StyledLink>
            </li>
            <li>
              <StyledLink>Contact Us</StyledLink>
            </li>
            <li>
              <StyledLink>FAQs</StyledLink>
            </li>
            <li>
              <StyledLink>Joural</StyledLink>
            </li>
          </ul>
        </ListItem>

        <ListItem>
          <p>CUSTOMER ASSISTANCE</p>
          <ul>
            <li>
              <StyledLink>Delivery & Returns</StyledLink>
            </li>
            <li>
              <StyledLink>Terms & Conditions</StyledLink>
            </li>
            <li>
              <StyledLink>Privacy Policy</StyledLink>
            </li>
            <li>
              <StyledLink>Cookies</StyledLink>
            </li>
            <li>
              <StyledLink>How to Measure</StyledLink>
            </li>
          </ul>
        </ListItem>

        <ListItem>
          <p>CONTACT US</p>
          <ul>
            <li>
              <p>
                If you have any questions regarding order, sizing, retailing
                please send us a message and we will be in touch with you as
                soon as possible.
              </p>
            </li>
          </ul>
          <EmailLink>monthius022@gmail.com</EmailLink>
          <Icons>
            <BsInstagram className="IconItem" />
            <FaFacebookF className="IconItem" />
            <BsPinterest className="IconItem" />
          </Icons>
        </ListItem>
        <Describe>
          <p>GOODIES WEBSITE SINCE 2022 | INSPIRED BY YERSINIA PESTIS</p>
          <p>Powered by Elecricity</p>
        </Describe>
      </ListWrapper>
    </>
  );
}
export default Footer;
