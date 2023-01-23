import React, { useState } from 'react';
import { Button, Badge, Card, Col, Row } from 'react-bootstrap';

function PriceCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function handleAddToCart(item) {
    setCart([...cart, item]);
    setTotal(total + item.price);
  }

  function handleRemoveFromCart(item) {
    setCart(cart.filter((i) => i.id !== item.id));
    setTotal(total - item.price);
  }

  return (
    <div>
      <Row>
        {items.map((item) => (
          <Col xs={12} md={4} key={item.id}>
            <Card style={{ margin: '10px 0' }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                {cart.find((i) => i.id === item.id) ? (
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove from Cart
                  </Button>
                ) : (
                  <Button variant="success" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          <h3>
            Total: <Badge variant="secondary">${total}</Badge>
          </h3>
        </Col>
      </Row>
    </div>
  );
}


export default App;

