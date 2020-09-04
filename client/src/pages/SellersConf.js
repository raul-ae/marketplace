import React from "react";
import { InputGroup, FormControl, Button, ListGroup, Form, Image } from 'react-bootstrap';

/* 
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  picture: { type: String, required: true },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store"
  },
  memberSince: { type: Date, default: Date.now }  
*/


function SellersConfig({ sellers, handleSellerSaveButton, handleSellerDeleteButton }) {
    // const currentSellers = ['Seller 1', 'Seller 2', 'Seller 3']

    let currentSellers = [];

    if (sellers) {
        if (sellers.length > 0) {
            currentSellers = [...sellers];
        }
    }


    return (
        <div>
            <h4><strong>Manage your sellers</strong></h4>

            <h5>Current sellers</h5>
            <ListGroup>
                {currentSellers.map((seller, index) => {
                    return (
                        <InputGroup key={index} className="mb-3">
                            <InputGroup.Prepend>
                                <Image src={seller.picture} roundedCircle />
                            </InputGroup.Prepend>
                            <ListGroup.Item >{`${seller.firstName} ${seller.lastName}`}</ListGroup.Item>
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Update</Button>
                                <Button
                                    variant="outline-secondary"
                                    data-sellerid={seller._id}
                                    onClick={handleSellerDeleteButton}
                                >Delete</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    );
                })}
            </ListGroup>

            <h5>Create a new seller</h5>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="userName">User name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="userName"
                        aria-describedby="userName"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="firstName">First name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="firstName"
                        aria-describedby="firstName"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="lastName">Last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="lastName"
                        aria-describedby="lastName"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="password">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="password"
                        aria-describedby="password"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="email">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="email"
                        aria-describedby="email"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="mobile">Mobile</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="mobile"
                        aria-describedby="mobile"
                    />
                </InputGroup>


                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="picture">Picture</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="URL"
                        aria-label="picture"
                        aria-describedby="picture"
                    />
                </InputGroup>

                <Button
                    variant="outline-secondary"
                    onClick={handleSellerSaveButton}
                >Create</Button>
            </Form>
        </div>
    );
}

export default SellersConfig;