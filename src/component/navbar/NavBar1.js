import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import { useSelector } from 'react-redux';

function NavBar1() {

    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const myUser = localStorage.getItem("myUser");
        if(myUser !== null) {
            setLoggedIn(true);
        }
    });

    const goToLogin = () => {
        return navigate("/user/login");
    }

    const doLogout = () => {
        const myUser = localStorage.getItem("myUser");
        if (myUser !== null) {
            localStorage.removeItem("myUser");
            alert("You have logged out successfully");
            navigate("/");
        }
    }

    return (
        <Navbar className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">

            <Link className="navbar-brand" to="#"><img src={logo} alt="logo" width="60px" height="40px" /></Link>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">About </Nav.Link>
                    <Nav.Link href="/admin/dashboard">Dasboard </Nav.Link>
                    <NavDropdown title="Train" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/train/all">View Trains</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Bookings" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/booking/all">My Bookings</NavDropdown.Item>
                        <NavDropdown.Item href="/booking/all">Cancel Bookings</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PNR" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/booking/all">Check PNR status</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className='container-fluid' style={{
                alignItems: 'right',
                justifyContent: 'right',
            }}>
                    <Nav.Link href="#"></Nav.Link>
                    <form class="form-inline" action="/action_page.php">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-light" type="submit">Search</button>
                    </form>
                    <Nav.Link>
                        {
                            loggedIn ?
                            <li className='nav-item'>
                                <button onClick={doLogout} className='btn btn-dark'>Logout</button>
                            </li>
                            :
                            <li className='nav-item'>
                                <button onClick={goToLogin} className='btn btn-dark'>Login</button>
                            </li>
                        }
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar1;