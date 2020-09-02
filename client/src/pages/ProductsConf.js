import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

/* 
  sku: { type: String, required: true }, input text
  productName: { type: String, required: true }, input text
  categoryName: { type: String, required: true }, select
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "seller",
  },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store",
  },
  picture: { type: String, required: true }
*/

function ProductsConfig() {
    return (
        <div>
            <Container>
                <Form>
                    <h4><strong>Create new product</strong></h4>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Example multiple select</Form.Label>
                        <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
  }
  
  export default ProductsConfig;