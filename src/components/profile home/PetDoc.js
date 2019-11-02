import React, { Component } from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faComment,
  faPlusCircle,
  faBriefcaseMedical,
  faUtensils,
  faPenNib,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

class PetDoc extends Component {
    render(){
        const{pet,diet,med,note,gallery} = this.props;
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
              <div><span className="mx-4"><FontAwesomeIcon icon={faPenNib} /></span>
                     <span><FontAwesomeIcon icon={faTimes} /></span>
                      </div>
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
        <Container style={{ padding: 0 }} className="mt-2">
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" className="diet-head">
    <div className="d-flex flex-row justify-content-between align-items-start">
                  <h2 className="text-dark">Diet </h2>
                  <FontAwesomeIcon icon={faUtensils} size="2x" className="mr-2" />
                </div>
    </Accordion.Toggle>
     <Accordion.Collapse eventKey="0">
                <Card.Body className="diet-bg">
                {diet == null ? <div>No diet entered</div> : 
                <Diet name={diet.dietname} type={diet.diettype} notes={diet.dietother}/>
              }  
                  <div className="d-flex justify-content-center pt-4">
                    <Link to={`/addDiet/${pet.id}`} className="addLink" style={{cursor:"pointer"}}>
                      <div className="icon-style">
                        <FontAwesomeIcon size="3x" icon={faPlusCircle} />
                      </div>
                      <div id="hide" className="pt-2">
                        <p>Add section</p>
                      </div>
                    </Link>
                  </div>
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
              {med == null ? <div>No medication entered</div> : 
                <Medicine name={med.medname} type={med.medtype} notes={med.mednotes}/>
              }  
            <div className="d-flex justify-content-center pt-4">
                    <a className="addLink" style={{cursor:"pointer"}}>
                      <div className="icon-style">
                        <FontAwesomeIcon size="3x" icon={faPlusCircle} />
                      </div>
                      <div id="hide" className="pt-2">
                        <p>Add section</p>
                      </div>
                    </a>
                  </div>
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
                  <FontAwesomeIcon
                    icon={faComment} 
                    size="2x"
                    className="mr-2"
                  />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
              <Card.Body className="notes-bg">
              {note == null ? <div>No notes entered</div> : 
                <Notes note={note.note}/>
              }  
            <div className="d-flex justify-content-center pt-4">
                    <a className="addLink" style={{cursor:"pointer"}}>
                      <div className="icon-style">
                        <FontAwesomeIcon size="3x" icon={faPlusCircle} />
                      </div>
                      <div id="hide" className="pt-2">
                        <p>Add section</p>
                      </div>
                    </a>
                  </div>
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
          {gallery == null ? <div>No photos entered</div> : 
                <Gallery photo={gallery.photo}/>
              }  
            </Row>
            <div className="d-flex justify-content-center pt-4">
                    <a className="addLink" style={{cursor:"pointer"}}>
                      <div className="icon-style">
                        <FontAwesomeIcon size="3x" icon={faPlusCircle} />
                      </div>
                      <div id="hide" className="pt-2">
                        <p>Add section</p>
                      </div>
                    </a>
                  </div>
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
PetDoc.propTypes={
    firestore: PropTypes.object.isRequired,
    animals: PropTypes.array
  }
export default compose(
    //props store as ID
    firestoreConnect(props=>[
        {collection: 'animals', storeAs:'pet', doc:props.match.params.id,},
        //subcollections
        {collection: 'animals', storeAs:'diet', doc:props.match.params.id,
      subcollections:[{collection:'diet'}]},
      {collection: 'animals', storeAs:'med', doc:props.match.params.id,
      subcollections:[{collection:'meds'}]},
      {collection: 'animals', storeAs:'note', doc:props.match.params.id,
      subcollections:[{collection:'notes'}]},
      {collection: 'animals', storeAs:'gallery', doc:props.match.params.id,
      subcollections:[{collection:'gallery'}]}
    ]),
    //retrieve by ID - destructuring
    connect(({firestore:{ordered}},props)=>({
        pet:ordered.pet && ordered.pet[0],
        diet:ordered.diet && ordered.diet[0],
        med:ordered.med && ordered.med[0],
        note:ordered.note && ordered.note[0],
        gallery:ordered.gallery && ordered.gallery[0]
    }))
)(PetDoc)