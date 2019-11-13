import React, { Component } from 'react'
import {Container, Col, Form,Breadcrumb} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom'

class EditPet extends Component {
    constructor(props){
        super(props);
        //create refs
        this.animalInput=React.createRef();
        this.nameInput=React.createRef();
        this.breedInput=React.createRef();
        this.sexInput=React.createRef();
        this.dobInput=React.createRef();
        this.thumbnailInput=React.createRef();
    }
    onSubmit=e=>{
        e.preventDefault();
        const{pet,firestore}=this.props;
        //update General Pet info
        const updPet={
            animal:this.animalInput.current.value,
            name:this.nameInput.current.value,
            breed:this.breedInput.current.value,
            sex:this.sexInput.current.value,
            dob:this.dobInput.current.value,
            thumbnail:this.thumbnailInput.current.value,

        }
        //update in firestore
        firestore.update({collection:'animals', doc:pet.id},updPet)
        .then(()=> this.props.history.push('/pets'))
    }
    render() {
        const{pet} = this.props;
        if(pet){
            return(
                <div>
                <Breadcrumb>
                <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item> 
                {pet ? <Breadcrumb.Item href={`/pet/${pet.id}`}>{pet.name}</Breadcrumb.Item>:<p>...</p>} 
          <Breadcrumb.Item active>Edit General</Breadcrumb.Item>
             </Breadcrumb>
                <Container className="my-5 addPet-bg">
                {/*General*/}
                <h3>Basic Information</h3>
                <Form  onSubmit={this.onSubmit}>
                <Form.Group as={Col}>
                      <Form.Label>Animal:</Form.Label>
                      <Form.Control as="select" name="animal" defaultValue={pet.animal} ref={this.animalInput} >
                        <option>...</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="name" placeholder="eg Fluffy" defaultValue={pet.name} ref={this.nameInput}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Breed</Form.Label>
                      <Form.Control type="text" name="breed" placeholder="eg Poodle" defaultValue={pet.breed} ref={this.breedInput} />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}  className="pb-5">
                      <Form.Label>Sex</Form.Label>
                      <Form.Control as="select" name="sex" defaultValue={pet.sex} ref={this.sexInput}>
                        <option>...</option>
                        <option>Female Entire</option>
                        <option>Female Desexed</option>
                        <option>Male Entire</option>
                        <option>Male Desexed</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Date of Birth {'(eg 09/02/2012)'}</Form.Label>
                      <Form.Control type="date" name="dob" defaultValue={pet.dob} ref={this.dobInput} />
                    </Form.Group>
                    <Form.Group as={Col}>
                    <label for="exampleFormControlFile1">Profile Pic URL</label>
                          <Form.Control type="text" name="thumbnail" defaultValue={pet.thumbnail} ref={this.thumbnailInput}/>
                          </Form.Group>
                  </Form.Row>
                        <div className="d-flex justify-content-center pt-2 pb-4 "> 
                        <button type="submit" value="Add Pet" name="addpet" class="btn btn-secondary mr-2">Submit</button>
                        <Link to={`/pet/${pet.id}`}><button type="button" class="btn btn-secondary">Cancel</button>
                        </Link>
                        </div>
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
    EditPet: PropTypes.func.isRequired
  }
  export default compose(
    //props store as ID
    firestoreConnect(props=>[
        {collection: 'animals', storeAs:'pet', doc:props.match.params.id,}
    ]),
    //retrieve by ID - destructuring
    connect(({firestore:{ordered}})=>({
        pet:ordered.pet && ordered.pet[0],
    }))
  )(EditPet)