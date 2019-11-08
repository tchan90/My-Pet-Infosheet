import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Table,
  } from "react-bootstrap";

 class General extends Component {

    render() {
        const {breed,dob,sex, profilepic} = this.props;
        return (
            <div>    
            <Container className="gen-border mt-2 bg-white">
            <Row className="no-gutters py-3">
              <Col lg={6}>
                <Table>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">Breed:</td>
                      <td>{breed}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Sex:</td>
                      <td>{sex}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">DOB:</td>
                      <td>{dob}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col lg={6}>
                <img
                  src={profilepic || "https://res.cloudinary.com/ddzbntqlz/image/upload/v1567493812/default-placeholder-general_feyzh3.png" } 
                  alt="profile pic"
                  className="ml-2 img-size rounded float-right"
                />
              </Col>
            </Row>
          </Container>
                </div>
        )
    }
}

export default General