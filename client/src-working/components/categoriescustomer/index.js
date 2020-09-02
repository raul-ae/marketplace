import React from "react";
import Nav from 'react-bootstrap/Nav';


function categoriescustomer() {
  return (
    <Nav fill variant="" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Category 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Category 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Category 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3">
            Category 1
            </Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default categoriescustomer;
