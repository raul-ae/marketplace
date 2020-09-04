import React from "react";
import { InputGroup, FormControl, Button, ListGroup, Form } from 'react-bootstrap';

/* 
  sku: { type: String, required: true }, input text
  productName: { type: String, required: true }, input text
  categoryName: { type: String, required: true }, select
  price: { type: Number, required: true }, input number
  stock: { type: Number, required: true }, input number
  description: { type: String, required: true }, textarea text
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "seller",
  },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store",
  },
  picture: { type: String, required: true } input url ? or text
*/

function ProductsConfig({
    products,
    categories,
    handleProductSaveButton,
    handleNewProductInputOnChange
}) {
    let currentCategories = categories.map(category => category.categoryName)
    let currentProducts = products.map(product => product.productName)
    console.log("Raul-products: ", currentProducts)
    return (
        <div>
            <h4><strong>Manage your products</strong></h4>

            <h5>Current products</h5>
            <ListGroup>
                {currentProducts.map((product, index) => {
                    return (
                        <InputGroup key={index} className="mb-3">
                            <ListGroup.Item >{product}</ListGroup.Item>
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Update</Button>
                                <Button variant="outline-secondary">Delete</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    );
                })}
            </ListGroup>

            <h5>Create a new product</h5>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="sku">SKU</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="CAT/###"
                        aria-label="sku"
                        aria-describedby="sku"
                        id="sku"
                        onChange={handleNewProductInputOnChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="productName">Product name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="sku"
                        aria-describedby="productName"
                        id="productName"
                        onChange={handleNewProductInputOnChange}

                    />
                </InputGroup>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a Category</Form.Label>
                    <Form.Control
                        as="select"
                        id="category"
                        onChange={handleNewProductInputOnChange}
                    >
                        {currentCategories.map((category, index) => {
                            return (
                                <option key={index}>{category}</option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="price">Price</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="MXN"
                        aria-label="price"
                        aria-describedby="price"
                        id="price"
                        onChange={handleNewProductInputOnChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="stock">Inventario</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="###,###"
                        aria-label="stock"
                        aria-describedby="stock"
                        id="stock"
                        onChange={handleNewProductInputOnChange}
                    />
                </InputGroup>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        id="description"
                        onChange={handleNewProductInputOnChange}
                    />
                </Form.Group>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="picture">Picture</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="URL"
                        aria-label="picture"
                        aria-describedby="picture"
                        id="picture"
                        onChange={handleNewProductInputOnChange}
                    />
                </InputGroup>

                <Button
                    variant="outline-secondary"
                    onClick={handleProductSaveButton}
                >Create</Button>
            </Form>
        </div>
    );
}

export default ProductsConfig;