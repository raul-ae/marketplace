import React from "react";
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

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
    const currentStores = ['Store 1', 'Store 2', 'Store 3']
    return (
        <div>
            <h4><strong>Manage your stores</strong></h4>

            <h5>Current stores</h5>
            <ListGroup>
                {currentStores.map((store, index) => {
                    return (
                        <InputGroup key={index} className="mb-3">
                            <ListGroup.Item >{store}</ListGroup.Item>
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Update</Button>
                                <Button variant="outline-secondary">Delete</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    );
                })}
            </ListGroup>

            <h5>Create a new store</h5>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Store name"
                    aria-label="store name"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Create</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default StoresConfig;