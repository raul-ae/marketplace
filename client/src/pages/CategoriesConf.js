import React from "react";
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

/* 
categoryName: { type: String, required: true },
  products: {
    type: Schema.Types.ObjectId,
    ref: "product"
  }
*/

function ProductsConfig() {
    const currentCategories = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus']
    return (
        <div>
            <h4><strong>Manage your categories</strong></h4>

            <h5>Current categories</h5>
            <ListGroup>
                {currentCategories.map((category, index) => {
                    return (
                        <InputGroup key={index} className="mb-3">
                            <ListGroup.Item >{category}</ListGroup.Item>
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Update</Button>
                                <Button variant="outline-secondary">Delete</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    );
                })}
            </ListGroup>

            <h5>Create a new cateogry</h5>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Category name"
                    aria-label="category name"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Add</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default ProductsConfig;