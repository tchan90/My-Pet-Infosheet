import React, { Component } from 'react'
import {Container, Col, Form,Breadcrumb} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

 class AddDiet extends Component {
   state={
    diettype:'',
    dietname:'',
    dietother:'',
   }

   onChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  
  onSubmit=(e) => {
    e.preventDefault();
   const newDiet = this.state;
   // store
   //.firestore()
   //.collection("animals")
   //.doc(this.props.match.params.id)
   //.collection("diet")
   //.add(newDiet)
  const{firestore} = this.props;
  firestore.add({collection:'animals', doc:this.props.match.params.id, subcollections:[{ collection: 'diet' }] }, newDiet)
  .then(()=> this.props.history.push('/user'))
  };
   
    render() {
      const {diettype, dietname, dietother} = this.state;
      const {pet} = this.props;
        return (
          <div>
          <Breadcrumb>
          <Breadcrumb.Item href="/user">All Pets</Breadcrumb.Item> 
          {pet ? <Breadcrumb.Item href={`/pet/${pet.id}`}>{pet.name}</Breadcrumb.Item>:<p>No name</p>} 
    <Breadcrumb.Item active>Add Diet</Breadcrumb.Item>
       </Breadcrumb>
                <Container className="my-5">
                <h1>Add Diet</h1>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit}>
                <Form.Row>
                    <Col lg={6}>
                    <Form.Group>
                   <Form.Label>Meal Type</Form.Label>
                   <Form.Control as="select" name="diettype" value={diettype} onChange={this.onChange}>
                        <option>...</option>
                        <option>Main</option>
                        <option>Snack</option>
                      </Form.Control>
                 </Form.Group>
                    </Col>
                    </Form.Row>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="dietname" placeholder="eg Royal Canin Puppy Dry" value={dietname} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} md="6" className="pb-5">
                        <Form.Label>Other</Form.Label>
                        <Form.Control as="textarea" rows="3" name="dietother" placeholder="Other notes you want to include" value={dietother} onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
              <button type="submit" value ="Add Diet" name="adddiet" class="btn btn-secondary mr-2">Submit</button>
                </Form>
            </Container>
            </div>
        )
    }
}
AddDiet.propTypes={  
  AddDiet: PropTypes.func.isRequired
}
export default compose(
  //props store as ID
  firestoreConnect(props=>[
      {collection: 'animals', storeAs:'pet', doc:props.match.params.id,}
  ]),
  //retrieve by ID - destructuring
  connect(({firestore:{ordered}},props)=>({
      pet:ordered.pet && ordered.pet[0],
  }))
)(AddDiet)