import React, { Component } from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';

import {
    Container,
    Row,
    Col,
    Accordion,
    Breadcrumb,
      Card
  } from "react-bootstrap";
  import General from '../profile sections/General';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faComment,
  faPlusCircle,
  faBriefcaseMedical,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";

class PetDoc extends Component {
    render(){
        const{pet} = this.props;
        if(pet){
            return (
                <div>
                    <div className="pl-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/user">All Pets</Breadcrumb.Item> 
      <Breadcrumb.Item active>{pet.name}</Breadcrumb.Item>
         </Breadcrumb>
        </div>
        <Container className="mt-4 heading-profile">
          <header>
            <Row className="top-streak d-flex flex-row justify-content-between py-3 px-3">
              <FontAwesomeIcon icon={`${pet.animal}` === 'Dog' ? faDog : faCat } />
              <div className="d-flex"> 
                <a href="/edit" className="edit-link">
                <p className="text-right">Edit</p>
              </a>
              <a href="#" className="edit-link">
                <p className="text-right">Delete</p>
              </a> 
              </div>
              
            </Row>
            <Row>
              <Col>
   <h1 className="text-left py-3"> 
   {pet.name}
     </h1>
              </Col>
            </Row>
          </header>
        </Container>
        <General animal={pet.animal} breed={pet.breed} dob={pet.dob} name={pet.name} sex={pet.sex} profilepic={pet.thumbnail} />
                </div>
            )
        }else{
            return <div class="d-flex justify-content-center py-5">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div> 
        }
       
    }
}
PetDoc.propTypes={
    firestore: PropTypes.object.isRequired,
    animals: PropTypes.array
  }
export default compose(
    //props store as ID
    firestoreConnect(props=>[
        {collection: 'animals', storeAs:'pet', doc:props.match.params.id}
    ]),
    //retrieve client by ID - destructuring
    connect(({firestore:{ordered}},props)=>({
        pet:ordered.pet && ordered.pet[0]
    }))
)(PetDoc)