import React, { Component } from "react";
import { Form, Col, Container, Breadcrumb } from "react-bootstrap";
import classnames from 'classnames';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom'


class AddPet extends Component {
  state={
    animal:'',
    name:'',
    breed:'',
    sex:'',
    dob:'',
    age:'',
    thumbnail:'',
    errors:{}
}
onChange=(e)=>{
  this.setState({[e.target.name]: e.target.value})
}

onSubmit=(e) => {
  e.preventDefault();
  const { name, animal, breed, sex, dob, thumbnail } = this.state;
  //check errors
  if(animal ===''){
    this.setState({
      errors:{animal:'Please select the species'}
    });
    return;
  }
  if(name ===''){
    this.setState({
      errors:{name:'Name is required'}
    });
    return;
  }
  if(breed ===''){
    this.setState({
      errors:{breed:'Breed is required'}
    });
  return;
  }
  if(sex ===''){
    this.setState({
      errors:{sex:'Please make a selection'}
    });
    return;
  }
  const newPet = {name, animal, breed, sex, dob, thumbnail};
  const{firestore} = this.props;
  firestore.add({collection:'animals'}, newPet)
.then(()=> this.props.history.push('/pets'))
};

  render() {
    const {name, animal, breed, sex, dob, thumbnail, errors} = this.state;
    return (
      <div>
      <div className="pl-3">
        <Breadcrumb>
          <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Pet</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h1 className="pt-4 pl-4">Add Pet</h1>
      <Container className="my-5 addPet-bg">
        {/*General*/}
        <h3>Basic Information</h3>
        <p className="pb-3">* fields must be filled</p>
        <Form  onSubmit={this.onSubmit}>
        <Form.Group as={Col}>
              <Form.Label>Animal*:</Form.Label>
              <Form.Control as="select" name="animal" value={animal} onChange={this.onChange} className={classnames({'is-invalid':errors.animal})} >
                <option>...</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Other</option>
              </Form.Control>
              {errors.animal && <div className="invalid-feedback">{errors.animal}</div>}
            </Form.Group>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" name="name" placeholder="eg Fluffy" value={name} onChange={this.onChange} className={classnames({'is-invalid':errors.name})}/>
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Breed*</Form.Label>
              <Form.Control type="text" name="breed" placeholder="eg Poodle" value={breed} onChange={this.onChange} className={classnames({'is-invalid':errors.breed})}/>
              {errors.breed && <div className="invalid-feedback">{errors.breed}</div>}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}  className="pb-5">
              <Form.Label>Sex*</Form.Label>
              <Form.Control as="select" name="sex" value={sex} onChange={this.onChange} className={classnames({'is-invalid':errors.sex})}>
                <option>...</option>
                <option>Female Entire</option>
                <option>Female Desexed</option>
                <option>Male Entire</option>
                <option>Male Desexed</option>
              </Form.Control>
              {errors.sex && <div className="invalid-feedback">{errors.sex}</div>}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Date of Birth {'(eg 09/02/2012)'}</Form.Label>
              <Form.Control type="date" name="dob" value={dob} onChange={this.onChange} />
            </Form.Group>
            <Form.Group as={Col}>
            <label>Profile Pic URL</label>
                  <Form.Control type="text" name="thumbnail" value={thumbnail} onChange={this.onChange} />
                  </Form.Group>
          </Form.Row>
                <div className="d-flex justify-content-center pt-2 pb-4 "> 
                <button type="submit" value="Add Pet" name="addpet" className="btn btn-secondary mr-2">Submit</button>
                <Link to="/pets"><button type="button" className="btn btn-secondary">Cancel</button></Link>
                </div>
        </Form>
      </Container>
    </div>
    );
  }
}

export default firestoreConnect()(AddPet);