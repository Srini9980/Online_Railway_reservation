import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

function NavBar() {

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
                        <NavDropdown.Item href="#">Add Train</NavDropdown.Item>
                        <NavDropdown.Item href="#">View Trains</NavDropdown.Item>
                        <NavDropdown.Item href="#">Edit Train</NavDropdown.Item>
                        <NavDropdown.Item href="#">Delete Train</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Fare" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/shipment/save">Add Fare</NavDropdown.Item>
                        <NavDropdown.Item href="/shipment/all">View Fares</NavDropdown.Item>
                        <NavDropdown.Item href="/shipment/all">Edit Fare</NavDropdown.Item>
                        <NavDropdown.Item href="/shipment/all">Delete Fare</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Bookings" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Add PNR</NavDropdown.Item>
                        <NavDropdown.Item href="#">View Bookings</NavDropdown.Item>
                        <NavDropdown.Item href="#">Edit PNR</NavDropdown.Item>
                        <NavDropdown.Item href="#">Delete PNR</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Users" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">View Users</NavDropdown.Item>
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

export default NavBar;