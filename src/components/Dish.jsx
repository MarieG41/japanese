import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import '../assets/styles/dish.css'

const Dish = ( {name, img, description, price, slug, isNew} ) => {
    return (
      <Container fluid="md">
        <Link to={`plat/${slug}`}></Link>
        <Card>
            <Row>
              <Col>
                {isNew && <Badge bg="primary p-2">Nouveau</Badge>}
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text className="bold">{price}€</Card.Text>
                  <Button variant="primary">Plus de détails</Button>
                </Card.Body>
              </Col>
            </Row>
        </Card>
      </Container>
    );
}

export default Dish