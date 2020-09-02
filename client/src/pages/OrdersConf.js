import React from "react";
import { Card, Row, Col, ListGroup, InputGroup, Button } from 'react-bootstrap';

/* 
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product"
    }
  ],
  storeID: {
    type: Schema.Types.ObjectId,
    ref: "store"
  },
  customerID: {
    type: Schema.Types.ObjectId,
    ref: "consumer"
  },
  orderStatus: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  Date: { type: Date, default: Date.now }
*/

function ProductsConfig() {
    const orders = ['Order 1', 'Order 2', 'Order 3'];
    const products = ['Product 1', 'Product 2', 'Product 3']
    return (
        <div>
            <h4><strong>Manage your orders</strong></h4>

            <h5>Orders</h5>
            {orders.map((order, index) => {
                return (
                    <Card body key={index}>
                        <h6>{order}</h6>
                        <Row>
                            <Col>
                                <p className='text-muted py-0 my-0'>Order_id: </p>
                                <p className='text-muted py-0 my-0'>Date: </p>
                                <p className='text-muted py-0 my-0'>Store id: </p>
                                <p className='text-muted py-0 my-0'>Customer id: </p>
                                <p className='text-muted py-0 my-0'>Total amount: </p>
                                <p className='text-muted py-0 my-0'>Order status: </p>
                            </Col>
                            <Col>
                                <p className='text-muted py-0 my-0'>Products: </p>
                                <ListGroup>
                                    {products.map((product, index) => {
                                        return (
                                            <ListGroup.Item key={index} className='text-muted py-0 my-0'>{product}</ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Col>
                        </Row>
                    </Card>
                );
            })}
        </div>
    );
}

export default ProductsConfig;