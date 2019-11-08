import React, { Component } from 'react'
import {Container, Col, Form,Breadcrumb} from 'react-bootstrap';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class EditMed extends Component {
    constructor(props){
        super(props);
        //create refs
        this.mednameInput=React.createRef();
        this.mednotesInput=React.createRef();
        this.medtypeInput=React.createRef();
    }
    onSubmit=e=>{
        e.preventDefault();
        const{firestore}=this.props;
        //update
        const updPet={
            medname:this.mednameInput.current.value,
            mednotes:this.mednotesInput.current.value,
            medtype:this.medtypeInput.current.value,
        }
        //update in firestore
        firestore.update({collection:'animals', doc:this.props.match.params.id1,subcollections:[{ collection: 'meds', doc:this.props.match.params.id2}]},updPet)
        .then(()=> this.props.history.push(`/pet/${this.props.match.params.id1}`));
    }
    render() {
        const{med,pet} = this.props;
        if(med){
            return(
                <div>
                    <Breadcrumb>
                <Breadcrumb.Item href="/pets">All Pets</Breadcrumb.Item> 
                {pet ? <Breadcrumb.Item href={`/pet/${this.props.match.params.id1}`}>{pet.name}</Breadcrumb.Item>:<p>...</p>} 
          <Breadcrumb.Item active>Edit Medication</Breadcrumb.Item>
             </Breadcrumb>
             <Container className="my-5">
                <h1>Edit Medication</h1>
                <Form className="bg-light px-3 py-3" onSubmit={this.onSubmit}>
                <Form.Row>
          <Form.Group as={Col} md="6"> 
          <Form.Label>Type</Form.Label>
        <Form.Control as="select" name="medtype" defaultValue={med.medtype} ref={this.medtypeInput}>
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
                <Form.Control type="text" name="medname" placeholder="eg Revolution for Dogs"  defaultValue={med.medname} ref={this.mednameInput}/>
                </ Form.Group>
                </Form.Row>
                <Form.Row> 
                <Form.Group as={Col} md="6" className="pb-5">
                        <Form.Control as="textarea" rows="3" name="mednotes" placeholder="Other notes you want to include" defaultValue={med.mednotes}  ref={this.mednotesInput}/>
                        </Form.Group>
                </Form.Row>
                <button type="submit" value ="Add Med" name="addmed" class="btn btn-secondary mr-2">Submit</button>
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
        {collection: 'animals', storeAs:'med', doc:props.match.params.id1,
      subcollections:[{collection:'meds', doc:props.match.params.id2}]},
      {collection: 'animals', storeAs:'pet', doc:props.match.params.id1}
    ]),
    //retrieve by ID - destructuring
    connect((state)=> ({
        med: state.firestore.data.med,
        pet: state.firestore.data.pet
    }))
  )(EditMed)