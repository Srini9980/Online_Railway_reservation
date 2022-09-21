import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

function NavBar1() {

    const navigate = useNavigate();

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
                    <NavDropdown title="Train" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">View Trains</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Bookings" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">My Bookings</NavDropdown.Item>
                        <NavDropdown.Item href="#">Cancel Bookings</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PNR" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Check PNT status</NavDropdown.Item>
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
                    <Nav.Link href=""><button className='btn btn-dark' onClick={doLogout}>Logout</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar1;