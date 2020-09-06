import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./style.css";
function Mainproducts({ products }) {
    
    return (
      <div>
        <CardDeck className="cards">
        {products.map(product => {
            return (
            <Card>
                <Card.Img variant="top" src={product.picture} />
                <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
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
