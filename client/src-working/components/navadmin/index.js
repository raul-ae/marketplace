import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function NavCustomer() {
  return (
    <Navbar>
        <Navbar.Brand href="#home">Marketplace Admin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Signed in as: <a href="#login">#Username</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavCustomer;
