import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../img/logo.png'


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar text-white position-sticky top-0" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src={logo} alt='logo' width={150}/>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                href="#home"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                href='#about'
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                href='#gallery'
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Gallery
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                href="#contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar