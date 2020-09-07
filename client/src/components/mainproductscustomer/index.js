import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./style.css";
// import Productdp from '../../pages/PDPCustomer';

function Mainproducts({ products }) {

  return (
    <div>
      <h1>
        Most popular products
    </h1>
      <CardDeck className="row-cols-3 deckhg">
        {products.map(product => {
          return (
            <Card className="card-hgt mb-3">
              <Card.Img src={product.picture} className="img-hgt" />
              <Card.Body>
                <h5 class="card-title prd-tle">{product.productName}</h5>
                <Card.Text className="sub-crd-height">{product.description}</Card.Text>
                <div className="smll-height"><small className="text-muted">Sold by: {product.sellerId}</small></div>
                <div className="col-12 price">$ {product.price} MXN</div>
                <Link
                  to={process.env.PUBLIC_URL + '/home/product/' + product._id}
                >
                  <div className="buttonNav col-12">View</div>
                </Link>
              </Card.Body>
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