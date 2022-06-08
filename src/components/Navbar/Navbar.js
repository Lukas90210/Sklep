import {Link} from 'react-router-dom';
import { BsSearch,BsPerson,BsBag } from 'react-icons/bs';

import {
    Nav,
    NavContainer,
    NavLogo,
    NavMenu,
    NavIcons
} from './Navbar.styled';

function Navbar() {
    return (
        <>
           <Nav>
            <NavContainer>
                <NavLogo>
                    <p>goodies</p>
                </NavLogo>

                <NavMenu>
                    <ul>
                        <li>
                            <Link className="navLink" to='/'>SHOP</Link>
                        </li>
                        <li>
                            <Link className="navLink" to='/'>BRANDS</Link>
                        </li>
                        <li>
                            <Link className="navLink" to='/'>JOURNAL</Link>
                        </li>
                        <li>
                            <Link className="navLink" to='/'>MAKE IT GOOD</Link>
                        </li>
                        <li>
                            <Link className="navLink" to='/'>VALUES</Link>
                        </li>
                        <li>
                            <Link className="navLink" to='/'>ABOUT</Link>
                        </li>
                    </ul>
                </NavMenu>

                <NavIcons>
                    <BsSearch className='NavIcon'/>
                    <BsBag className='NavIcon'/>
                    <BsPerson className='NavIcon'/>
                </NavIcons>
            </NavContainer>
           </Nav>
        </>

    )
}

export default Navbar;