import React, { Component } from "react";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  CardColumns,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import PetCard from './PetCard';

class PetFile extends Component {
render(){
  const {animals} = this.props;
  if(animals){
    return( 
<div>
  <Container>
    <Row className="no-gutters">
      <Col lg={6}>
        <h1 className="pt-5 pl-3 text-left title-font">My Pet's Database</h1>
      </Col>
    </Row>
  </Container>
  <Container> 
  <section className="pt-5 pb-3">
    <CardColumns> 
    {animals.map(animal => (
         <PetCard key = {animal.id} pet = {animal}  />
    ))}
    
  </CardColumns>
  </section>
  </Container>
  <div className="d-flex justify-content-center pt-4">
      <a href="/addPet" className="addLink">
        <div className="icon-style"><FontAwesomeIcon size="3x" icon={faPlusCircle}/> </div>        
      <div id="hide" className="py-2"> <p>Add pet</p></div>
      </a>      
  </div>
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
PetFile.propTypes={
  firestore: PropTypes.object.isRequired,
  animals: PropTypes.array
}
export default compose(
  firestoreConnect([{collection:'animals'}]),
connect((state,props)=>({
  animals:state.firestore.ordered.animals
}))
)(PetFile);
