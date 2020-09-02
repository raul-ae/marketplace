import React from "react";
import { Card, Row, Col, ListGroup, Image, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

/* 
  storeName: { type: String, required: true },
  storePicture: { type: String, required: true },
  products: [
    {
      type:Schema.Types.ObjectId,
      ref: "product"
    }
  ],
  seller: {
    type: Schema.Types.ObjectId,
    ref: "seller"
  }
*/

function StoresConfig() {
    const stores = ['Store 1', 'Store 2', 'Store 3'];
    const products = ['Product 1', 'Product 2', 'Product 3']
    const currentSellers = ['Seller 1', 'Seller 2', 'Seller 3']
    return (
        <div>
            <h4><strong>Manage your stores</strong></h4>

            <h5>Current stores</h5>
            {stores.map((store, index) => {
                return (
                    <Card body key={index}>
                        <h6>{store}</h6>
                        <Row>
                            <Col>
                                <p className='text-muted py-0 my-0'>Store id: </p>
                                <p className='text-muted py-0 my-0'>Store name: </p>
                                <p className='text-muted py-0 my-0'>Seller name: </p>
                                <Image src="https://via.placeholder.com/150/ADD8E6" rounded />
                            </Col>
                            <Col>
                                <p className='text-muted py-0 my-0'>Products: </p>
                                <ListGroup className='pb-5'>
                                    {products.map((product, index) => {
                                        return (
                                            <ListGroup.Item key={index} className='text-muted py-0 my-0'>{product}</ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                                <Button className='mx-3' variant="outline-secondary">Update</Button>
                                <Button variant="outline-secondary">Delete</Button>
                            </Col>
                        </Row>
                    </Card>
                );
            })}

            <h5>Create a new store</h5>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="storeName">Store name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="storeName"
                        aria-describedby="storeName"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="storePicture">Store picture</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="URL"
                        aria-label="storePicture"
                        aria-describedby="storePicture"
                    />
                </InputGroup>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a Seller</Form.Label>
                    <Form.Control as="select">
                        {currentSellers.map((seller, index) => {
                            return (
                                <option key={index}>{seller}</option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>

                <p>Select the products for your store:</p>
                {products.map((product) => {
                    return (
                        <Form.Check
                            custom
                            type='checkbox'
                            id={`custom-checkbox`}
                            label={product}
                        />
                    );
                })}

                <Button className='mt-5' variant="outline-secondary">Create</Button>
            </Form>
        </div>
    );
}

export default StoresConfig;