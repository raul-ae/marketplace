import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Item from '../components/checkoutProductsItem';
import Card from 'react-bootstrap/Card';
import NavCustomer from '../components/navcustomercheckout';
import Footer from '../components/footercustomercheckout';
import API from '../utils/API'

function PDP() {

  const [order, setOrder] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);

  // let orderProducts = [];
  // let orderAddress = '';
  // let orderPayment = '';


  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    console.log('IN USEEFFECT OF ORDER - order: ', order);
    if (order.products) {
      if (order.products.length > 0) {
        console.log('in if');
        // orderProducts = [...order.products];
        setOrderProducts(order.products);
        console.log('orderProducts.length - orderProducts: ', orderProducts);
      }
    }
  }, [order]);




  const loadOrders = () => {
    API.getOrders()
      .then(res => {
        // setOrders(res.data);
        console.log('loadOrders - res.data: ', res.data);
        localStorage.clear();
        console.log('localStorage cleared');
        let orders = [...res.data];
        let lastOrder = orders[orders.length - 1];
        console.log('lastOrder: ', lastOrder);
        setOrder(lastOrder);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <NavCustomer />
      <Container className="marg minht" fluid>
        <Row>
          <div className="col-12 d-flex justify-content-center">
            <h1>
              Your ordern has been confirmed!<br></br>
                Confirmation number: #
            </h1>
          </div>
        </Row>
        <Row>
          <div className="col-12 d-flex justify-content-center">
            <h2>Here are some details of your purchase</h2>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <Card>
              <h3>Your Products</h3>
              {orderProducts.map((product) => {
                return (
                  <Item
                    product={product}
                    hideDeleteBtn={false}
                  />
                );
              })}
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col-6">
            <Card>
              <h3>Address</h3>
            </Card>
          </div>
          <div className="col-6">
            <Card>
              <h3>Payment</h3>
            </Card>
          </div>
        </Row>
      </Container >
      <Footer />
    </>
  );
}

export default PDP;
