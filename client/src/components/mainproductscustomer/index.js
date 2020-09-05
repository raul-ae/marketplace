import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./style.css";
import Productdp from '../../pages/PDPCustomer';

function Mainproducts({ products }) {

  return (
    <div>
      <h1>
        Most popular products
    </h1>
      <CardDeck className="row-cols-4">
        {products.map(product => {
          return (
            <Card className="crd-height mb-3">
              <Card.Img variant="top" src={product.picture} className="crd-img-hgt" />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text className="sub-crd-height">{product.description}</Card.Text>
                <Link
                  to={process.env.PUBLIC_URL + '/home/product/' + product._id}
                >
                  <div className="buttonNav col-12">View</div>
                </Link>
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

/*
component={() => {
                    return (
                      <Productdp
                        // products={products}
                        // id={product._id}
                        product={product}
                      />
                    );
                  }}
*/