import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <center>
      <Row style={{ paddingBottom: 20, paddingTop: 20 }}>
        <Col>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Counter</Card.Title>
              <Card.Text>{count}</Card.Text>
              <ButtonGroup aria-label="Button Group">
                <Button
                  label="Increment"
                  styleType="primary"
                  onClick={increment}
                />
                <Button
                  label="Decrement"
                  styleType="danger"
                  onClick={decrement}
                />
                <Button label="Reset" styleType="secondary" onClick={reset} />
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </center>
  );
}

export default Counter;
