import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../img/petinfo-logo.png';
import {Link} from 'react-router-dom'

class Home extends Component {
  
    render() {
        return (
            <div className="landing-bg">
                <Container fluid>
                    <Row className="vertical-align">
                        <Col lg="6"  className="ml-auto d-flex flex-column">
                        <div className="mx-auto"><img src={logo} alt='logo'/> </div>
                        <Link to="/pets" className="mainMenuBtn mx-auto">Enter Pet Database</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;