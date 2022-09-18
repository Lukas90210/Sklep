import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsPerson, BsBag } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked((prev) => !prev);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">
          <p>goodies</p>
        </div>

        <div className={clicked ? "navMenu active" : "navMenu"}>
          <ul>
            <li>
              <Link className="navLink" to="/">
                SHOP
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                BRANDS
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                JOURNAL
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                MAKE IT GOOD
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                VALUES
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        <div className="navIcons">
          <BsSearch className="navIcon" />
          <BsBag className="navIcon" />
          <BsPerson className="navIcon" />

          <div onClick={handleClick}>
            {clicked ? (
              <FaTimes className="bars" />
            ) : (
              <FaBars className="bars" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

/*
class Navbar extends Component {
  state = { clicked: false };

  handleChange = () => {
    this.setState({ clicked: !this.state.clicked });
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }))
  };

  render() {
    
  }
}
*/
export default Navbar;
