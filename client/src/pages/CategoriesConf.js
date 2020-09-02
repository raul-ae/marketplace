import React from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

/* 
categoryName: { type: String, required: true },
  products: {
    type: Schema.Types.ObjectId,
    ref: "product"
  }
*/

function ProductsConfig() {
    return (
        <div>
            <h4><strong>Create a category</strong></h4>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Category name"
                    aria-label="category name"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default ProductsConfig;