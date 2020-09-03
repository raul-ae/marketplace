import React, { useState, useEffect } from "react";
import API from "../utils/API";

// React components
import { Tab, Row, Col, Nav } from "react-bootstrap";

// Custom components
import ProductsConfig from "./ProductsConf";
import OrdersConfig from "./OrdersConf";
import CategoriesConfig from "./CategoriesConf";
import SellersConfig from "./SellersConf";
import StoresConfig from "./StoresConf";

function HomeAdmin() {

  const [categories, setCategories] = useState({
    categories: [],
    categoryName: '',
    category_id: ''
  });


  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    API.getCategories()
      .then(res => {
        setCategories(res.data);
        console.log('loadCategories - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav className="flex-column" variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="first" bg="dark" variant="dark">
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Sellers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Stores</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ProductsConfig />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <OrdersConfig />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <CategoriesConfig />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <SellersConfig />
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <StoresConfig />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default HomeAdmin;
