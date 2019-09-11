import React, { Component } from 'react'
import {Form, Col} from 'react-bootstrap'

 class AddMed extends Component {
    render() {
        return (
            <div>
                <Form className="bg-light px-3 py-3">
                <Form.Row>
          <Form.Group as={Col} md="6"> 
          <Form.Label>Type</Form.Label>
        <Form.Control as="select" name="medtype">
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
                <Form.Control type="text" name="medname" placeholder="eg Revolution for Dogs" />
                </ Form.Group>
                </Form.Row>
                <Form.Row> 
                <Form.Group as={Col} md="4"  className="pb-5">
                <Form.Label>Frequency</Form.Label>
                <Form.Control type="text" name="medfreq" placeholder="eg Once a month" />
                </ Form.Group>
                <Form.Group as={Col} md="4">
                <Form.Label>Route</Form.Label>
                <Form.Control as="select" name="medroute">
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
                <p>every</p> <Form.Control type="number" name="dietfreq" className="mx-2"/> <p>hours</p>
                </div>
                </Form.Group>
                <Form.Group as={Col} md="6" className="pb-5">
                        <Form.Control as="textarea" rows="3" name="mednotes" placeholder="Other notes you want to include"/>
                        </Form.Group>
                </Form.Row>
                <button type="button" name="addmed" class="btn btn-secondary mr-2">Submit</button>
                </Form>
            </div>
        )
    }
}

export default AddMed