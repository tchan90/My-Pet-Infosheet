import React, { Component } from "react";
import { Form, Col, Container, Breadcrumb } from "react-bootstrap";
import uuid from 'uuid';
import classnames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPet} from '../../actions/petActions';
import AddDiet from '../add sections/AddDiet'

class AddPet extends Component {
  state={
    animal:'',
    name:'',
    breed:'',
    sex:'',
    dob:'',
    age:'',
    thumbnail:'',
    diettype:'',
    dietname:'',
    mealtimes:'',
    volume:'',
    volumemeasure:'',
    dietother:'',
    medtype:'',
    medname:'',
    medfreq:'',
    medroute:'',
    medhour:'',
    mednotes:'',
    note:'',
    photo:'',
    errors: {}
}

onChange= e => this.setState({[e.target.name]:e.target.value})


onSubmit=(e) => {
  e.preventDefault();
  const {animal, name, breed, sex, dob, thumbnail, diettype, dietname, mealtimes, volume, volumemeasure, dietother, medtype, medname, medfreq, medroute, medhour, mednotes, note, photo} = this.state;
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

  const newPet  = {
    id: uuid(), animal, name, breed, sex, dob, thumbnail, diettype, dietname, mealtimes, volume, volumemeasure, dietother, medtype, medname, medfreq, medroute, medhour, mednotes, note, photo
  };
  
  //Submit Pet
  this.props.addPet(newPet)

  //clear state after submission
  this.setState({
    animal:'',
    name:'',
    breed:'',
    sex:'',
    dob:'',
    age:'',
    thumbnail:'',
    diettype:'',
    dietname:'',
    mealtimes:'',
    volume:'',
    volumemeasure:'',
    dietother:'',
    medtype:'',
    medname:'',
    medfreq:'',
    medroute:'',
    medhour:'',
    mednotes:'',
    note:'',
    photo:'',
    errors: {}
});
//redirect to home page
this.props.history.push("/user");
};

  render() {
    const {animal, name, breed, sex, dob, age, thumbnail, diettype, dietname, mealtimes, volume, volumemeasure, dietother, medtype, medname, medfreq, medroute, medhour, mednotes, note, photo, errors} = this.state;
    return (
      <div className="addPet-bg">
      <div className="pl-3">
        <Breadcrumb>
          <Breadcrumb.Item href="/user">All Pets</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Pet</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h1 className="pt-4 pl-4">Add Pet</h1>
      <Container className="mt-5">
        {/*General*/}
        <h3>General</h3>
        <p className="pb-3">* fields must be filled</p>
        <Form  onSubmit={this.onSubmit}>
        <Form.Group as={Col}>
              <Form.Label>Animal*:</Form.Label>
              <Form.Control as="select" name="animal" value={animal} onChange={this.onChange} className={classnames({'is-invalid':errors.animal})} >
                <option>...</option>
                <option>Dog</option>
                <option>Cat</option>
              </Form.Control>
              {errors.animal && <div className="invalid-feedback">{errors.animal}</div>}
            </Form.Group>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" name="name" placeholder="eg Fluffy" value={name} onChange={this.onChange} className={classnames({'is-invalid':errors.name})} />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Breed*</Form.Label>
              <Form.Control type="text" name="breed" placeholder="eg Poodle" value={breed} onChange={this.onChange} className={classnames({'is-invalid':errors.breed})} />
              {errors.breed && <div className="invalid-feedback">{errors.breed}</div>}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}  className="pb-5">
              <Form.Label>Sex*</Form.Label>
              <Form.Control as="select" name="sex" value={sex} onChange={this.onChange} errors={errors.sex} className={classnames({'is-invalid':errors.sex})}>
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
          <Form.Group>
          <label for="exampleFormControlFile1">Upload Profile Picture</label>
  <input type="file" name="thumbnail" class="form-control-file" value={thumbnail} onChange={this.onChange}/>
      <small> Keep images to around 554px x 370px  </small>
          </Form.Group>
          </Form.Row>
         {/*Diet*/}
          <h3 className="border-top pt-5 pb-3" >Diet</h3>
          <Form.Row>
            <Col lg={6}>
            <Form.Group>
           <Form.Label>Meal Type</Form.Label>
           <Form.Control as="select" name="diettype" value={diettype} onChange={this.onChange}>
                <option>...</option>
                <option>Main</option>
                <option>Snack</option>
              </Form.Control>
         </Form.Group>
            </Col>
            </Form.Row>
            <Form.Group>
            <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="dietname" placeholder="eg Royal Canin Puppy Dry" value={dietname} onChange={this.onChange} />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} md="4">
              <Form.Label>Frequency</Form.Label>
              <div className="d-flex flex-row justify-content-between align-items-start">
              <Form.Control type="number" name="mealtimes" placeholder="eg 2" value={mealtimes} onChange={this.onChange}/> <p className="ml-2"> times a day</p>
              </div>
              </Form.Group>
              <Form.Group as={Col} md="4" className="ml-5">
              <Form.Label>Volume</Form.Label>
              <div className="d-flex flex-row justify-content-between align-items-start">
              <Form.Control type="number" name="volume" placeholder="eg 2" value={volume} onChange={this.onChange}/>  
              <Form.Control as="select" name="volumemeasure" value={volumemeasure} onChange={this.onChange}>
                <option>...</option>
                <option>cup/s</option>
                <option>treat/s</option>
              </Form.Control>
              </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" className="pb-5">
                <Form.Label>Other</Form.Label>
                <Form.Control as="textarea" rows="3" name="dietother" placeholder="Other notes you want to include" value={dietother} onChange={this.onChange}/>
                </Form.Group>
            </Form.Row>
         {/*Medicine*/}
        <h3 className="border-top pt-5 pb-3">Medicine</h3>
        <Form.Row>
        <Form.Group as={Col} md="6"> 
        <Form.Label>Type</Form.Label>
      <Form.Control as="select" name="medtype" value={medtype} onChange={this.onChange}>
                <option>...</option>
                <option>Parasite Control</option>
                <option>Heart</option>
                <option>Skin</option>
                <option>Ears</option>
                <option>Stomach</option>
                <option>Immune System</option>
                <option>Musculo-Skeletal</option>
                <option>Kidneys</option>
                <option>Liver</option>
                <option>Hormonal</option>
              </Form.Control>
              </Form.Group>
              </Form.Row>
              <Form.Row> 
              <Form.Group as={Col} md="6">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="medname" placeholder="eg Revolution for Dogs" value={medname} onChange={this.onChange} />
              </ Form.Group>
              </Form.Row>
              <Form.Row> 
              <Form.Group as={Col} md="4"  className="pb-5">
              <Form.Label>Frequency</Form.Label>
              <Form.Control type="text" name="medfreq" placeholder="eg Once a month"  value={medfreq} onChange={this.onChange}/>
              </ Form.Group>
              <Form.Group as={Col} md="4">
              <Form.Label>Route</Form.Label>
              <Form.Control as="select" name="medroute" value={medroute} onChange={this.onChange}>
                <option>...</option>
                <option>Orally</option>
                <option>Topical</option>
                <option>Injected</option>
                <option>Placed in the eye</option>
                <option>Placed in ears</option>
                <option>Inhaled</option>
              </Form.Control>
              </ Form.Group>
              <Form.Group as={Col} md="2" className="pt-4 ml-3">
              <div className="d-flex flex-row justify-content-between align-items-start">
              <p>every</p> <Form.Control type="number" name="medhour" className="mx-2" value={medhour} onChange={this.onChange}/> <p>hours</p>
              </div>
              </Form.Group>
              <Form.Group as={Col} md="6" className="pb-5">
                <Form.Control as="textarea" rows="3" name="mednotes" placeholder="Other notes you want to include" value={mednotes} onChange={this.onChange}/>
                </Form.Group>
              </Form.Row>
           {/*Notes*/}
              <h3 className="border-top pt-5 pb-3">Notes</h3>
              <Form.Row> 
              <Form.Group as={Col} md="6" className="pb-5">
                <Form.Control as="textarea" rows="3" name="note" placeholder="Other notes you want to include" value={note} onChange={this.onChange}/>
                </Form.Group>
                </Form.Row>
              {/*Gallery*/}
              <h3 className="border-top pt-5 pb-3">Gallery</h3>
                <Form.Row>
                  <Form.Group>
                  <label for="exampleFormControlFile1">Upload Gallery Photos</label>
                       <input type="file" class="form-control-file" name="photo" value={photo} onChange={this.onChange}/>
                  </Form.Group>
                </Form.Row>

                <div className="d-flex justify-content-center pt-2 pb-4 "> 
                <button type="submit" value="Add Pet" name="addpet" class="btn btn-secondary mr-2">Submit</button>
                <a href="/user"><button type="button" class="btn btn-secondary">Cancel</button></a>
                </div>
        </Form>
      </Container>
    </div>
    );
  }
}
AddPet.propTypes={
  addPet: PropTypes.func.isRequired
}

export default connect(null, {addPet})(AddPet);