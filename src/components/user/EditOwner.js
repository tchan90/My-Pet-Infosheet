import React, { Component } from 'react';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom'

class EditOwner extends Component {
    constructor(props){
        super(props);
        //create refs
        this.firstNameInput=React.createRef();
        this.lastNameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }
  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit=e=>{
    e.preventDefault();
    const{firestore,user}=this.props;
    //update
    const updOwner={
        firstName:this.firstNameInput.current.value,
        lastName:this.lastNameInput.current.value,
        email:this.emailInput.current.value,
        phone:this.phoneInput.current.value,
    }
    //update in firestore
    firestore.update({collection:'users', doc:user.id},updOwner)
    .then(()=> this.props.history.push('/owner'));
}
onDeleteClick=()=>{
  const{user,firestore,history}=this.props;
  firestore.delete({collection:'users', doc:user.id})
  .then(()=>history.push('/owner'))
}

  render() {
    const{user}=this.props;
    if(user)
{
    return (
        <div>
        <Container  className="mt-5">
        <Link to="/owner" className="text-secondary">Back</Link>
            <h2 className="py-2 ">Edit Owner</h2>
            <Row className="d-flex justify-content-center">
                <Col lg={8}>
                <Form className="py-2 mb-2" onSubmit={this.onSubmit}>
      <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" name="firstName" defaultValue={user.firstName} onChange={this.handleChange} ref={this.firstNameInput}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" name="lastName" defaultValue={user.lastName} onChange={this.handleChange} ref={this.lastNameInput}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={user.email} onChange={this.handleChange} ref={this.emailInput}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" name="phone" defaultValue={user.phone} onChange={this.handleChange} ref={this.phoneInput}/>
        </Form.Group>
        <div className="d-flex justify-content-around">  
            <Button variant="secondary" type="submit">
          Submit
        </Button> 
        <Button variant="danger" onClick={this.onDeleteClick}>
          Delete Owner
        </Button></div>
      </Form>
                </Col>
            </Row>
        </Container>
    </div>
        )
}else{
    return <div className="d-flex justify-content-center py-5">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> 
}
   
  }
}
  export default compose(
    //props store as ID
    firestoreConnect(props=>[ 
      {collection: 'users', storeAs:'user', doc:props.match.params.id}
    ]),
    //retrieve by ID - destructuring
    connect(({firestore:{ordered}})=>({
        user:ordered.user && ordered.user[0]
    }))
  )(EditOwner)