import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function mainproducts() {
  return (
      <div>
    <h1>
        Most popular products
    </h1>
    <CardDeck>
        <Card>
            <Card.Img variant="top" src="../../Images/productph.png" />
            <Card.Body>
            <Card.Title>Product</Card.Title>
            <Card.Text>
                Product description over here
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Seller: ProductSeller</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="../../Images/productph.png" />
            <Card.Body>
            <Card.Title>Product</Card.Title>
            <Card.Text>
                Product description over here
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Seller: ProductSeller</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="../../Images/productph.png" />
            <Card.Body>
            <Card.Title>Product</Card.Title>
            <Card.Text>
                Product description over here
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Seller: ProductSeller</small>
            </Card.Footer>
        </Card>
    </CardDeck>
    </div>
  );
}

export default mainproducts;
