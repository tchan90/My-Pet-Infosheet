import React, { Component } from 'react'
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

import {Consumer} from '../../Context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faComment,
  faPlusCircle,
  faBriefcaseMedical,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";

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

    return (
        <Consumer>
          {value => {
            const {pets} = value;
            return(
              <div>
              <div className="pl-3">
                <Breadcrumb>
                  <Breadcrumb.Item href="/user">All Pets</Breadcrumb.Item>
                  {pets.map(pet => (
            <Breadcrumb.Item active>{pet.name}</Breadcrumb.Item>
                    ))}
               </Breadcrumb>
              </div>
              <Container className="mt-4 border border-dark">
                <header>
                  <Row className="top-streak d-flex flex-row justify-content-between py-3 px-3">
                    {pets.map(pet => (
                    <FontAwesomeIcon icon={`${pet.animal}` === 'Dog' ? faDog : faCat } />
                    ))}
                    <div className="d-flex"> 
                      <a href="/edit" className="edit-link">
                      <p className="text-right">Edit</p>
                    </a>
                    <a href="#" className="edit-link">
                      <p className="text-right">Delete</p>
                    </a> 
                    </div>
                    
                  </Row>
                  <Row className="bg-white">
                    <Col>
                    {pets.map(pet => (
         <h1 className="text-left py-3"> 
         {pet.name}
           </h1>
                    ))}
                     
                    </Col>
                  </Row>
                </header>
              </Container>
              {pets.map(pet => (
                       <General general={pet.general} profilepic={pet} />
                    ))}
              <Container style={{ padding: 0 }} className="mt-2">
                <Accordion defaultActiveKey="0">
                    {/*Diet*/}
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
                {pets.map(pet => (
                  <Diet diets={pet.diets}/>
                  ))}
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
        
                  {/*Medicine*/}
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
                  {pets.map(pet => (
                 <Medicine medication={pet.medication}/>
                 ))}
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
        
                  {/*Notes*/}
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
                   {pets.map(pet => (
                 <Notes note={pet.notes}/>
                 ))}
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
             
              {/*Gallery*/}   
            <Container style={{ padding: 0 }} className="mt-4 pb-4">
                <div>
                  <h2 className="pt-3 pb-2 border-bottom border-dark">Gallery</h2>
                </div>
                <Row className="pt-4">
              {pets.map(pet => (
                <Gallery photo={pet.gallery} /> 
                ))}
                  </Row>
              </Container>
            </div>

            )
          }}
        </Consumer>     
    )
  }
}

export default Profile 

