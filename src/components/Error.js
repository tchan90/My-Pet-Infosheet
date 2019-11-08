import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { ReactComponent as ErrorCat } from './cat-vacuum.svg'

export default function Error() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="py-5 text-center">
                        <h1 className="display-2">This page doesn't exist...</h1>
                        <h4 className="display-4">Click <Link to="/pets" className="text-warning">here</Link> to go back to your profile page</h4>
                    </Col>
                </Row>
                <Container className="pt-5"> 
                    <Row> 
                        <Col md={6} className="mx-auto">
                        <ErrorCat className="w-25 catVac"/>
                        </Col>
                    </Row>
                </Container>
                
            </Container>
        </div>
    )
}

