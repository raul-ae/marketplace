import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom";
import "./style.css";


function NavCustomer() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link
                    to={process.env.PUBLIC_URL + '/'}
                >
                    <img
                        alt=""
                        src="../../Images/logo.png"
                        width="300"

                        className="d-inline-block align-top"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="col-10">
                    <FormControl type="text" placeholder="Search" className="col-10" />
                    <div className="buttonNav">Search</div>
                </Form>
                <Nav className="col-2">
                    <Link
                        to={process.env.PUBLIC_URL + '/home/login'}
                    >
                        <Nav.Link href="/home/login">Log In </Nav.Link>
                    </Link>
                    <Link
                        to={process.env.PUBLIC_URL + '/home/shoppingcart'}
                    >
                        <Nav.Link href="/home/shoppingcart"><i className="fas fa-shopping-cart"></i>Shopping Cart</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavCustomer;
