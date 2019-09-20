import React, { Component } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <div>
                 <Container className="margins-login">
                    <Row>
                        <Col md={6} className="mx-auto">
                            <Form >
                                <h2>Login</h2>
                                <Form.Group className="pt-2">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="..." />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="..." />
                                </Form.Group>
                                <div className="d-flex justify-content-end"> <Button variant="dark">Submit</Button> </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                        <div className="d-flex justify-content-center"><Button className="mt-5" variant="outline-primary" href="/register">No Account? Register here!</Button></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
