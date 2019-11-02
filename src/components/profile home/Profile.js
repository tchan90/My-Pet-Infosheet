import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
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
import Diet from '../profile sections/Diet';
import Medicine from '../profile sections/Medicine';
import Notes from '../profile sections/Notes';
import Gallery from '../profile sections/Gallery';
import AddDiet from '../add sections/AddDiet';
import AddMed from '../add sections/AddMed';
import AddNotes from '../add sections/AddNote';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faComment,
  faPlusCircle,
  faBriefcaseMedical,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import PetCard from './PetCard';

class Profile extends Component {
  constructor(){
    super();
    this.state={
      AddMoreDiet:false,
      AddMoreMed: false,
      AddMoreNotes: false,
    };
    this.showAddDiet = this.showAddDiet.bind(this);
    this.showAddMed = this.showAddMed.bind(this);
    this.showAddNote = this.showAddNote.bind(this);

  }

  showAddDiet = (e) =>{
    //console.log('Hello World')
    this.setState({AddMoreDiet: !this.state.AddMoreDiet})
  }

  showAddMed = (e) => {
    this.setState({AddMoreMed: !this.state.AddMoreMed})
  }

  showAddNote = (e) => {
    this.setState({AddMoreNotes: !this.state.AddMoreNotes})
  }

  render() {
    const{AddMoreDiet} = this.state;
    const{AddMoreMed} = this.state;
    const{AddMoreNotes} = this.state;
    const {animal} = this.props;
    if(animal){
      return(
        <div>
          {animal.name}
         <div className="pl-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/user">All Pets</Breadcrumb.Item> 
      <Breadcrumb.Item active>{animal.name}</Breadcrumb.Item>
         </Breadcrumb>
        </div>
        <Container className="mt-4 heading-profile">
          <header>
            <Row className="top-streak d-flex flex-row justify-content-between py-3 px-3">
              <FontAwesomeIcon icon={`${animal.animal}` === 'Dog' ? faDog : faCat } />
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
   {animal.name}
     </h1>
              </Col>
            </Row>
          </header>
        </Container>
                 <General animal={animal.animal} breed={animal.breed} dob={animal.dob} name={animal.name} sex={animal.sex} profilepic={animal.thumbnail} />
       <Container style={{ padding: 0 }} className="mt-2">
          <Accordion defaultActiveKey="0">
              
              <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="diet-head"
              >
                <div className="d-flex flex-row justify-content-between align-items-start">
                  <h2 className="text-dark">Diet </h2>
                  <FontAwesomeIcon icon={faUtensils} size="2x" className="mr-2" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="diet-bg">
            <Diet diets={pet.diets}/>
             <div className="d-flex justify-content-center pt-4">
                    <a onClick={this.showAddDiet} className="addLink" style={{cursor:"pointer"}}>
                      <div className="icon-style">
                        <FontAwesomeIcon size="3x" icon={faPlusCircle} />
                      </div>
                      <div id="hide" className="pt-2">
                        <p>Add food</p>
                      </div>
                    </a>
                  </div>
                  {AddMoreDiet ? (<AddDiet />)  : null }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          
            
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                className="medicine-head"
              >
                <div className="d-flex flex-row justify-content-between align-items-start">
                  <h2 className="text-dark">Medication </h2>
                  <FontAwesomeIcon
                    icon={faBriefcaseMedical}
                    size="2x"
                    className="mr-2"
                  />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
              <Card.Body className="med-bg">
           <Medicine medication={pet.medication}/>
            <div className="d-flex justify-content-center pt-4">
                    <a onClick={this.showAddMed} className="addLink" style={{cursor:"pointer"}}>
                      <div className="icon-style">
                        <FontAwesomeIcon size="3x" icon={faPlusCircle} />
                      </div>
  
                      <div id="hide" className="pt-2">
                        <p>Add medicine</p>
                      </div>
                    </a>
                  </div>
                  {AddMoreMed ? (<AddMed />)  : null }
            </Card.Body>
            </Accordion.Collapse>
            </Card>
  
            
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                className="notes-head"
              >
                <div className="d-flex flex-row justify-content-between align-items-start">
                  <h2 className="text-dark">Notes </h2>
                  <FontAwesomeIcon icon={faComment} size="2x" className="mr-2" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="notes-bg">
           <Notes note={pet.notes}/>
            <div className="d-flex justify-content-center pt-4">
                    <a onClick={this.showAddNote} className="addLink">
                      <div className="icon-style">
                        <FontAwesomeIcon size="3x" icon={faPlusCircle} />
                      </div>
                      <div id="hide" className="pt-2">
                        <p>Add note</p>
                      </div>
                    </a>
                  </div>
                  {AddMoreNotes ? ( <AddNotes />) : null }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container> 
       
       
      <Container style={{ padding: 0 }} className="mt-4 pb-4">
          <div>
            <h2 className="pt-3 pb-2 border-bottom border-dark">Gallery</h2>
          </div>
          <Row className="pt-4">
          <Gallery photo={pet.gallery} /> 
            </Row>
        </Container> 
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
Profile.propTypes={
  firestore: PropTypes.object.isRequired,
  animals: PropTypes.array
}
export default compose(firestoreConnect(props=> [
  {
    collection: 'animals', storeAs:'animal',
    doc:props.match.params.id,
    subcollections:[
 {collection: 'diet'}
  //{collection: 'medication', doc:props.match.params.id},
  //{collection: 'gallery', doc:props.match.params.id},
 // {collection:'notes', doc:props.match.params.id}
]
}]),
connect(({firestore:{ordered}},props)=>({
  animal:ordered.animal && ordered.animal[0]
}))
)(Profile); 

