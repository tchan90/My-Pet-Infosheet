import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Table,
  } from "react-bootstrap";
import PropTypes from 'prop-types';

 class General extends Component {
  static propTypes={
    breed:PropTypes.string.isRequired,
    sex:PropTypes.string.isRequired,
    dob:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}

    render() {
        const {general, profilepic} = this.props;
        return (
            <div>
               {general.map(gen => (
            <Container className="border border-dark mt-2 bg-white">
            <Row className="no-gutters py-3">
              <Col lg={6}>
                <Table>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">Breed:</td>
                      <td>{gen.breed}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Sex:</td>
                      <td>{gen.sex}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">DOB:</td>
                      <td>{gen.dob}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Age:</td>
                      <td>{gen.age}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col lg={6}>
                <img
                  src={profilepic.thumbnail}
                  alt="profile pic"
                  className="ml-2 img-size rounded float-right"
                />
              </Col>
            </Row>
          </Container>
          ))}
                </div>
        )
    }
}

export default General