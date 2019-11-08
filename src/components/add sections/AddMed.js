import React, { Component } from 'react';
import {Form, Col,Breadcrumb,Container} from 'react-bootstrap';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

 class AddMed extends Component {
  state={
    medtype:'',
    medname:'',
    mednotes:'',
   }

   onChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  
  onSubmit=(e) => {
    e.preventDefault();
   const newMed = this.state;
  const{pet,firestore} = this.props;
  firestore.add({collection:'animals', doc:this.props.match.params.id, subcollections:[{ collection: 'meds' }] }, newMed)
  .then(()=> this.props.history.push(`/pet/${pet.id}`))
  };
    render() {
      const {medtype, medname, mednotes} = this.state;
      const {pet} = this.props;
        return (
            <div>
               <Breadcrumb>
          <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item> 
          {pet ? <Breadcrumb.Item href={`/pet/${pet.id}`}>{pet.name}</Breadcrumb.Item>:<p>...</p>} 
    <Breadcrumb.Item active>Add Medication</Breadcrumb.Item>
       </Breadcrumb>
       <Container className="my-5">
                <h1>Add Medication</h1>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit}>
                <Form.Row>
          <Form.Group as={Col} md="6"> 
          <Form.Label>Type</Form.Label>
        <Form.Control as="select" name="medtype" value={medtype} onChange={this.onChange}>
                  <option>...</option>
                  <option>Parasite Control</option>
                  <option>Heart</option>
                  <option>Skin</option>
                  <option>Ears</option>
                  <option>Stomach</option>
                  <option>Immune System</option>
                  <option>Musculo-Skeletal</option>
                  <option>Kidneys</option>
                  <option>Liver</option>
                  <option>Hormonal</option>
                </Form.Control>
                </Form.Group>
                </Form.Row>
                <Form.Row> 
                <Form.Group as={Col} md="6">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="medname" placeholder="eg Revolution for Dogs"  value={medname} onChange={this.onChange}/>
                </ Form.Group>
                </Form.Row>
                <Form.Row> 
                <Form.Group as={Col} md="6" className="pb-5">
                        <Form.Control as="textarea" rows="3" name="mednotes" placeholder="Other notes you want to include" value={mednotes} onChange={this.onChange}/>
                        </Form.Group>
                </Form.Row>
                <button type="submit" value ="Add Med" name="addmed" className="btn btn-secondary mr-2">Submit</button>
                </Form>
                </Container>
            </div>
        )
    }
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
)(AddMed)