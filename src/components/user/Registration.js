import React, { Component } from 'react';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';

export default class Registration extends Component {
  render() {
    return (
        <div>
        <Container  className="mt-5">
            <h2 className="py-2 ">Register</h2>
            <Row className="d-flex justify-content-center">
                <Col lg={8}>
                <Form className="py-2 mb-2">
      <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
    <Form.Label>Gender</Form.Label>
    <Form.Control as="select">
     <option>...</option>
      <option>Male</option>
      <option>Female</option>
    </Form.Control>
    </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-flex justify-content-end">  
            <Button variant="secondary" type="submit">
          Submit
        </Button></div>
      
      </Form>
                </Col>
            </Row>
        </Container>
    </div>
        )
  }
}
