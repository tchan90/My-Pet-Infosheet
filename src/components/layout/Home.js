import React, { Component } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Registration from '../Registration';

import logo from '../../img/petinfo-logo.png';

class Home extends Component {
    constructor(){
        super();
        this.state={
            registerDisplay: false
        }
        this.toggleRegister = this.toggleRegister.bind(this);
    }

    toggleRegister(){
        this.setState({
            registerDisplay: !this.state.registerDisplay
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <img className="margins-logo" src={logo} alt='logo'/>
                    </div>
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
                        <div className="d-flex justify-content-center"><Button className="mt-4" variant="outline-primary" onClick={this.toggleRegister}>No Account? Register here!</Button></div>
                        </Col>
                    </Row>
                </Container>
                <Registration registerDisplay={this.state.registerDisplay}/>
            </div>
        )
    }
}

export default Home;