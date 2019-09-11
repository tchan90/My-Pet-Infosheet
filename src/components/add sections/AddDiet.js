import React, { Component } from 'react'
import {Container, Col, Form} from 'react-bootstrap'
import {Consumer} from '../../Context'

 class AddDiet extends Component {
   state={
    diettype:'',
    dietname:'',
    mealtimes:'',
    volume:'',
    volumemeasure:'',
    dietother:'',
   }

   onChange=(e) => {
    this.setState({[e.target.name]:e.target.value})
   }

   onSubmit=(dispatch, e)=> {
     e.preventDefault();
     const {diettype, dietname, mealtimes, volume, volumemeasure, dietother} = this.state;

     const newDiet = {
      diettype, dietname, mealtimes, volume, volumemeasure, dietother
     };

     dispatch({type: "ADD_DIET", payload:newDiet})
     //clear state after submission
     this.setState({
      diettype:'',
      dietname:'',
      mealtimes:'',
      volume:'',
      volumemeasure:'',
      dietother:''
     });
  
   };
   
    render() {
        return (
          <Consumer>
            {value => {
              const {dispatch} = value;
              return(
                <Container>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit.bind(this,dispatch)}>
                <Form.Row>
                    <Col lg={6}>
                    <Form.Group>
                   <Form.Label>Meal Type</Form.Label>
                   <Form.Control as="select" name="diettype" value={this.state.diettype} onChange={this.onChange}>
                        <option>...</option>
                        <option>Main</option>
                        <option>Snack</option>
                      </Form.Control>
                 </Form.Group>
                    </Col>
                    </Form.Row>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="dietname" placeholder="eg Royal Canin Puppy Dry" value={this.state.dietname} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} md="4">
                      <Form.Label>Frequency</Form.Label>
                      <div className="d-flex flex-row justify-content-between align-items-start">
                      <Form.Control type="number" name="mealtimes" placeholder="eg 2" value={this.state.mealtimes} onChange={this.onChange}/> <p className="ml-2"> times a day</p>
                      </div>
                      </Form.Group>
                      <Form.Group as={Col} md="4" className="ml-5">
                      <Form.Label>Volume</Form.Label>
                      <div className="d-flex flex-row justify-content-between align-items-start">
                      <Form.Control type="number" name="volume" placeholder="eg 2" value={this.state.volume} onChange={this.onChange}/>  
                      <Form.Control as="select" name="volumemeasure" value={this.state.volumemeasure} onChange={this.onChange}>
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
                        <Form.Control as="textarea" rows="3" name="dietother" placeholder="Other notes you want to include" value={this.state.dietother} onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
              <button type="submit" value ="Add Diet" name="adddiet" class="btn btn-secondary mr-2">Submit</button>
                </Form>
            </Container>
              )
            }}
          </Consumer>  
        )
    }
}

export default AddDiet
