import React, { Component } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import logo from '../../img/petinfo-logo.png';
import Login from '../user/Login';

class Home extends Component {
  
    render() {
        return (
            <div className="landing-bg">
                <Container fluid>
                    <Row>
                        <Col lg="6"  className="ml-auto">
                            <div className="d-flex justify-content-center mb-2"> 
                        <img className="margins-logo" src={logo} alt='logo'/>
                        </div>
                    <Login/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;