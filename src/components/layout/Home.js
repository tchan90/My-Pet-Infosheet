import React, { Component } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import logo from '../../img/petinfo-logo.png';
import Login from '../user/Login';

class Home extends Component {
  
    render() {
        return (
            <div className="landing-bg">
                <Container fluid>
                    <Row className="vertical-align">
                        <Col lg="6"  className="ml-auto d-flex flex-column">
                        <div className="mx-auto"><img src={logo} alt='logo'/> </div>
                        <div className="mx-auto"><Login/> </div> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;