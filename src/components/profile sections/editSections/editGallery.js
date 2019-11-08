import React, { Component } from 'react'
import {Container, Form,Breadcrumb,} from 'react-bootstrap';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class EditGallery extends Component {
    constructor(props){
        super(props);
        //create refs
        this.photoInput=React.createRef();
    }
    onSubmit=e=>{
        e.preventDefault();
        const{firestore}=this.props;
        //update
        const updPet={
            photo:this.photoInput.current.value,
        }
        //update in firestore
        firestore.update({collection:'animals', doc:this.props.match.params.id1,subcollections:[{ collection: 'gallery', doc:this.props.match.params.id2}]},updPet)
        .then(()=> this.props.history.push(`/pet/${this.props.match.params.id1}`));
    }
    render() {
        const{photo,pet} = this.props;
        if(photo){
            return(
                <div>
                    <Breadcrumb>
                <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item> 
                {pet ? <Breadcrumb.Item href={`/pet/${this.props.match.params.id1}`}>{pet.name}</Breadcrumb.Item>:<p>...</p>} 
          <Breadcrumb.Item active>Edit Note</Breadcrumb.Item>
             </Breadcrumb>
             <Container className="my-5">
                <h1>Edit Photo</h1>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit}>
                <Form.Group> 
                  <Form.Control type="text" name="photo" placeholder="Paste image url" defaultValue={photo.photo} ref={this.photoInput}/>
                  </Form.Group>
                  <button type="submit" value ="Add Note" name="addnote" class="btn btn-secondary mr-2">Submit</button>
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
  export default compose(
    //props store as ID
    firestoreConnect(props=>[ 
        {collection: 'animals', storeAs:'photo', doc:props.match.params.id1,
      subcollections:[{collection:'gallery', doc:props.match.params.id2}]},
      {collection: 'animals', storeAs:'pet', doc:props.match.params.id1}
    ]),
    //retrieve by ID - destructuring
    connect((state)=> ({
        note: state.firestore.data.note,
        pet: state.firestore.data.pet
    }))
  )(EditGallery)