import React from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Cart = () => {
  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom du produit</th>
              <th>Quantité</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <h5>Total: </h5>
        <Button>Payer</Button>
      </Container>
    </>
  );
};

export default Cart;
