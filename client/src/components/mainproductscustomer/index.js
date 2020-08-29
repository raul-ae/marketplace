import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function Mainproducts(props) {
  return (
      <div>
    <h1>
        Most popular products
    </h1>
          <CardDeck>
              {props.products.map(product => {
                  return (
                    <Card>
                      <Card.Img variant="top" src={product.picture} />
                      <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          SellerID: {product.sellerId}
                        </small>
                      </Card.Footer>
                    </Card>
                  );
              })
              }
    </CardDeck>
    </div>
  );
}

export default Mainproducts;
