import React, { Component } from 'react'
import {Container, Col, Form,Breadcrumb,Button} from 'react-bootstrap';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

class EditPet extends Component {
    constructor(props){
        super(props);
        //create refs
        this.diettypeInput=React.createRef();
        this.dietnameInput=React.createRef();
        this.dietotherInput=React.createRef();
    }
    onSubmit=e=>{
        e.preventDefault();
        const{firestore}=this.props;
        //update
        const updPet={
            diettype:this.diettypeInput.current.value,
            dietname:this.dietnameInput.current.value,
            dietother:this.dietotherInput.current.value,
        }
        //update in firestore
        firestore.update({collection:'animals', doc:this.props.match.params.id1,subcollections:[{ collection: 'diet', doc:this.props.match.params.id2}]},updPet)
        .then(()=> this.props.history.push(`/pet/${this.props.match.params.id1}`));
    }
onDeleteClick=()=>{
//delete in firestore
const{firestore}=this.props;
firestore.delete({collection:'animals', doc:this.props.match.params.id1,subcollections:[{ collection: 'diet', doc:this.props.match.params.id2}]})
.then(()=> this.props.history.push(`/pet/${this.props.match.params.id1}`));
    }
    render() {
        const{diet,pet} = this.props;
        if(diet){
            return(
                <div>
                    <Breadcrumb>
                <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item> 
                {pet ? <Breadcrumb.Item href={`/pet/${this.props.match.params.id1}`}>{pet.name}</Breadcrumb.Item>:<p>...</p>} 
          <Breadcrumb.Item active>Edit Diet</Breadcrumb.Item>
             </Breadcrumb>
                <Container className="my-5">
                <h1>Edit Diet</h1>
                <div className="d-flex justify-content-end">
                <a href="#!"  onClick={() => { if (window.confirm('Are you sure you wish to delete this entry?')) {this.onDeleteClick()} } }><span><FontAwesomeIcon icon={faTimes} /></span> <span>Delete Entry</span></a> 
                </div>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit}>
                <Form.Row>
                    <Col lg={6}>
                    <Form.Group>
                   <Form.Label>Meal Type</Form.Label>
            <p className="p-1 font-italic">Current: {diet.diettype}</p>
                   <Form.Control as="select" name="diettype" 
                   ref={this.diettypeInput} defaultValue={diet.diettype}>
                        <option>...</option>
                        <option>Main</option>
                        <option>Snack</option>
                      </Form.Control>
                 </Form.Group>
                    </Col>
                    </Form.Row>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="dietname" placeholder="eg Royal Canin Puppy Dry" 
                      ref={this.dietnameInput} defaultValue={diet.dietname}/>
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} md="6" className="pb-5">
                        <Form.Label>Other</Form.Label>
                        <Form.Control as="textarea" rows="3" name="dietother" placeholder="Other notes you want to include" ref={this.dietotherInput} defaultValue={diet.dietother}/>
                        </Form.Group>
                    </Form.Row>
              <Button variant="secondary" type="submit" value ="Add Diet" name="adddiet" className="mr-2">Submit</Button>
              <Link to={`/pet/${this.props.match.params.id1}`}><button type="button" className="btn btn-secondary">Cancel</button>
                        </Link>
                </Form>
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
EditPet.propTypes={
  firestore:PropTypes.object.isRequired,
  animals: PropTypes.array
}

  export default compose(
    //props store as ID
    firestoreConnect(props=>[ 
        {collection: 'animals', storeAs:'diet', doc:props.match.params.id1,
      subcollections:[{collection:'diet', doc:props.match.params.id2}]},
      {collection: 'animals', storeAs:'pet', doc:props.match.params.id1}
    ]),
    //retrieve by ID - destructuring
    connect((state)=> ({
        diet: state.firestore.data.diet,
        pet: state.firestore.data.pet
    }))
  )(EditPet)