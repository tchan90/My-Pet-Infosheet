import React, { Component } from 'react';
import {Form,Breadcrumb,Container} from 'react-bootstrap';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class AddGallery extends Component {
    state={
        photo:''
       }
       onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
      }
      
      onSubmit=(e) => {
        e.preventDefault();
       const newPhoto = this.state;
      const{pet,firestore} = this.props;
      firestore.add({collection:'animals', doc:this.props.match.params.id, subcollections:[{ collection: 'gallery' }] }, newPhoto)
      .then(()=> this.props.history.push(`/pet/${pet.id}`))
      };
    render() {
        const {pet} = this.props;
        const {photo} = this.state;
        return (
            <div>
                 <Breadcrumb>
          <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item> 
          {pet ? <Breadcrumb.Item href={`/pet/${pet.id}`}>{pet.name}</Breadcrumb.Item>:<p>...</p>} 
    <Breadcrumb.Item active>Add Note</Breadcrumb.Item>
       </Breadcrumb>
       <Container className="my-5">
                <h1>Add Photo</h1>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit}>
                <Form.Group> 
                  <Form.Control type="text" name="photo" placeholder="Paste image url" value={photo} onChange={this.onChange}/>
                  </Form.Group>
                  <button type="submit" value ="Add Note" name="addnote" className="btn btn-secondary mr-2">Submit</button>
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
  )(AddGallery)