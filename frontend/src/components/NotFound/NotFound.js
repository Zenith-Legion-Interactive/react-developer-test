import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navigate = useNavigate();
  

  const goToHome = () => {
    navigate('/counters');
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/">
            <Button variant="primary" onClick={() => {
              goToHome();
            }}>Go to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;