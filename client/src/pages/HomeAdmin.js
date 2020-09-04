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

  const [sellers, setSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryUpdatedName, setCategoryUpdatedName] = useState('');
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    sku: "",
    productName: "",
    picture: "",
    price: 0,
    description: "",
    category: "",
    inventario: 0,

  });


  useEffect(() => {
    loadProducts()
    loadCategories();
    loadSellers();
  }, []);

  function loadProducts() {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
        console.log('loadProducts - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  };


  const loadCategories = () => {
    API.getCategories()
      .then(res => {
        setCategories(res.data);
        // console.log('loadCategories - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }

  const loadSellers = () => {
    API.getSellers()
      .then(res => {
        setSellers(res.data);
        console.log('loadSellers - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }

  const saveCategory = (categoryName) => {
    // console.log('SAVECATEGORY - categoryName: ', categoryName);
    API.saveCategoy(categoryName)
      .then(res => {
        // console.log('Category saved - res.data: ', res.data);
        loadCategories();
      })
      .catch(err => console.log(err));
  }

  const deleteCategory = (id) => {
    // console.log('deleteCategory - id: ', id);
    API.deleteCategory(id)
      .then(res => {
        // console.log('Category deleted - res.data: ', res.data);
        loadCategories();
      })
      .catch(err => console.log(err));
  }

  const updateCategory = (id, update) => {
    // console.log('updateCategory - id: ', id);
    API.updateCategory(id, update)
      .then(res => {
        // console.log('Category deleted - res.data: ', res.data);
        loadCategories();
      })
      .catch(err => console.log(err));
  }

  const handleCategoryInputOnChange = (e) => {
    let value = e.target.value;
    setCategoryName(value);
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  }

  const handleCategoryUpdatedInputOnChange = (e) => {
    let value = e.target.value;
    setCategoryUpdatedName(value);
    // console.log('handleCategoryUpdatedInputOnChange - e.target.value: ', e.target.value);
  }

  const handleCategorySaveButton = () => {
    // console.log('handleCategorySaveButton - categories.categoryName: ', categories.categoryName);
    saveCategory(categoryName);
  }

  const handleCategoryDeleteButton = (e) => {
    let id = e.target.getAttribute('data-categoryid');
    // console.log('handleCategoryDeleteButton - id: ', id);
    deleteCategory(id);
  }

  const handleCategoryUpdateButton = (e) => {
    let id = e.target.getAttribute('data-categoryid');
    // console.log('handleCategoryUpdateButton - id: ', id);
    updateCategory(id, categoryUpdatedName);
  }

  const handleNewProductInputOnChange = (e) => {
    let key = e.target.id
    let value = e.target.value;

    // console.log(e.target.id, ": ", e.target.value)
    setNewProduct({ ...newProduct, [key]: value });
    // console.log('handleCategoryInputOnChange - e.target.value: ', e.target.value);
  }
  const handleProductSaveButton = () => {
    saveProduct()
  }

  const saveProduct = () => {
    API.saveProduct(newProduct)
      .then(res => {
        // console.log('Category saved - res.data: ', res.data);
        loadProducts();
      })
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
              <ProductsConfig
                products={products}
                categories={categories}
                handleProductSaveButton={handleProductSaveButton}
                handleNewProductInputOnChange={handleNewProductInputOnChange}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <OrdersConfig />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <CategoriesConfig
                categories={categories}
                handleCategoryInputOnChange={handleCategoryInputOnChange}
                handleCategorySaveButton={handleCategorySaveButton}
                handleCategoryDeleteButton={handleCategoryDeleteButton}
                handleCategoryUpdateButton={handleCategoryUpdateButton}
                handleCategoryUpdatedInputOnChange={handleCategoryUpdatedInputOnChange}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <SellersConfig
                sellers={sellers}
              />
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
