import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function pdpTabs() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Details">
            <div>
                Content here
            </div>
        </Tab>
        <Tab eventKey="profile" title="Shipment">
            <div>
                Content here
            </div>
        </Tab>
        <Tab eventKey="contact" title="Contact">
            <div>
                Content here
            </div>
        </Tab>
    </Tabs>
  );
}

export default pdpTabs;
