import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, ButtonGroup } from "react-bootstrap";
import Button from "../Button/Button";
import { increment, decrement, reset } from "../../features/counterSlice";



const Counter = ({ counterId }) => {
  const count = useSelector(
    (state) => state?.counters?.counters[counterId] || 0
  );
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment({ counterId }));
  };

  const handleDecrement = () => {
    dispatch(decrement({ counterId }));
  };

  const handleReset = () => {
    dispatch(reset({ counterId }));
  };

  return (
    <center>
      <Row style={{ paddingBottom: 20, paddingTop: 20 }}>
        <Col>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Counter</Card.Title>
              <p>{count}</p>
              <ButtonGroup aria-label="Button Group">
                <Button
                  label="Increment"
                  styleType="primary"
                  onClick={handleIncrement}
                />
                <Button
                  label="Decrement"
                  styleType="danger"
                  onClick={handleDecrement}
                />
                <Button
                  label="Reset"
                  styleType="secondary"
                  onClick={handleReset}
                />
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </center>
  );
};

export default Counter;
