import React, { Component } from 'react'
import {Container, Form,Breadcrumb,} from 'react-bootstrap';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

class EditNote extends Component {
    constructor(props){
        super(props);
        //create refs
        this.noteInput=React.createRef();
    }
    onSubmit=e=>{
        e.preventDefault();
        const{firestore}=this.props;
        //update
        const updPet={
            note:this.noteInput.current.value,
        }
        //update in firestore
        firestore.update({collection:'animals', doc:this.props.match.params.id1,subcollections:[{ collection: 'notes', doc:this.props.match.params.id2}]},updPet)
        .then(()=> this.props.history.push(`/pet/${this.props.match.params.id1}`));
    }
    onDeleteClick=()=>{
      //delete in firestore
      const{firestore}=this.props;
      firestore.delete({collection:'animals', doc:this.props.match.params.id1,subcollections:[{ collection: 'notes', doc:this.props.match.params.id2}]})
      .then(()=> this.props.history.push(`/pet/${this.props.match.params.id1}`));
          }
    render() {
        const{note,pet} = this.props;
        if(note){
            return(
                <div>
                    <Breadcrumb>
                <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item> 
                {pet ? <Breadcrumb.Item href={`/pet/${this.props.match.params.id1}`}>{pet.name}</Breadcrumb.Item>:<p>...</p>} 
          <Breadcrumb.Item active>Edit Note</Breadcrumb.Item>
             </Breadcrumb>
             <Container className="my-5">
                <h1>Edit Note</h1>
                <div className="d-flex justify-content-end">
                <a href="#!"  onClick={() => { if (window.confirm('Are you sure you wish to delete this entry?')) {this.onDeleteClick()} } }><span><FontAwesomeIcon icon={faTimes} /></span> <span>Delete Entry</span></a> 
                </div>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit}>
                <Form.Group> 
                  <Form.Control as="textarea" rows="3" name="note" placeholder="Other notes you want to include" defaultValue={note.note} ref={this.noteInput}/>
                  </Form.Group>
                  <button type="submit" value ="Add Note" name="addnote" className="btn btn-secondary mr-2">Submit</button>
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
EditNote.propTypes={
  firestore:PropTypes.object.isRequired,
  animals: PropTypes.array
}

  export default compose(
    //props store as ID
    firestoreConnect(props=>[ 
        {collection: 'animals', storeAs:'note', doc:props.match.params.id1,
      subcollections:[{collection:'notes', doc:props.match.params.id2}]},
      {collection: 'animals', storeAs:'pet', doc:props.match.params.id1}
    ]),
    //retrieve by ID - destructuring
    connect((state)=> ({
        note: state.firestore.data.note,
        pet: state.firestore.data.pet
    }))
  )(EditNote)