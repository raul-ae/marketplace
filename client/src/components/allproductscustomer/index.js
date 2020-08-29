import React from "react";
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

function mainproducts(props) {
  return (
      <div>
    <h1>
        All products
    </h1>
        <CardColumns>
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
        </CardColumns>
    </div>
  );
}

export default mainproducts;
