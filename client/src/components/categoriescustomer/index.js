import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./style.css";


function categoriescustomer() {
    return (
        <Nav fill variant="" defaultActiveKey="/home" className="nav">
            <Nav.Item>
                <Nav.Link href="#" className="nav-item">Category 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" className="nav-item">Category 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" className="nav-item">Category 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3" className="nav-item">
                    Category 1
            </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default categoriescustomer;
