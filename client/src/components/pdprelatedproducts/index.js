import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import "./style.css";
function Mainproducts(props) {
    
    return (
      <div>
        <CardDeck className="cards">
            <Card>
                <Card.Img variant="top" src="../../Images/productph.png" />
                <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">
                    SellerID: Seller
                </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="../../Images/productph.png" />
                <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">
                    SellerID: Seller
                </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="../../Images/productph.png" />
                <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">
                    SellerID: Seller
                </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="../../Images/productph.png" />
                <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">
                    SellerID: Seller
                </small>
                </Card.Footer>
            </Card>
        </CardDeck>
    </div>
  );
}

export default Mainproducts;
