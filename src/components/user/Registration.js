import React, { Component } from 'react';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import uuid from 'uuid';
import {firestoreConnect} from 'react-redux-firebase';
import classnames from 'classnames';
import {Link} from 'react-router-dom'

class Registration extends Component {
  state={
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    errors:{}

  }
  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    const { firstName, lastName, email, phone } = this.state;
    //check errors
    if(firstName ===''){
      this.setState({
        errors:{firstName:'Please enter first name'}
      });
      return;
    }
    if(lastName ===''){
      this.setState({
        errors:{lastName:'Please enter last name'}
      });
      return;
    }
    if(email ===''){
      this.setState({
        errors:{email:'Please enter email'}
      });
      if(phone ===''){
        this.setState({
          errors:{phone:'Please enter phone'}
        });
      return;
      }
      return;
    }
    const newOwner = { firstName, lastName, email, phone, uuid:uuid()};
    const{firestore} = this.props;
    firestore.add({collection:'users'}, newOwner)
  .then(()=> this.props.history.push('/owner'))
  };

  render() {
    const{firstName,lastName,email,phone,errors}=this.state;
    return (
        <div>
        <Container  className="mt-5">
        <Link to="/owner" className="text-secondary">Back</Link>
            <h2 className="py-2 ">Add Owner</h2>
            <Row className="d-flex justify-content-center">
                <Col lg={8}>
                <Form className="py-2 mb-2" onSubmit={this.handleSubmit}>
      <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" name="firstName" value={firstName} onChange={this.handleChange} className={classnames({'is-invalid':errors.firstName})} />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" name="lastName" value={lastName} onChange={this.handleChange} className={classnames({'is-invalid':errors.lastName})}/>
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} className={classnames({'is-invalid':errors.email})}/>
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" name="phone" value={phone} onChange={this.handleChange} className={classnames({'is-invalid':errors.phone})}/>
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
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

export default firestoreConnect()(Registration);