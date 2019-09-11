import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

class AddNote extends Component {
    render() {
        return (
            <div>
                <Form className="bg-light px-3 py-3">
                <Form.Group> 
                  <Form.Control as="textarea" rows="3" name="mednotes" placeholder="Other notes you want to include" />
                  </Form.Group>
                  <button type="button" name="addmednotes" class="btn btn-secondary mr-2">Submit</button>
                  </Form>
            </div>
        )
    }
}

export default AddNote