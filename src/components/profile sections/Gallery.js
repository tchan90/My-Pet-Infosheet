import React, { Component } from 'react';
import {Col, Container} from 'react-bootstrap';

class Gallery extends Component {
    render() {
        const{photo} = this.props;
        return (
          <div> 
            <Container>
            <Col md={6} className="mx-auto">
            <h5>Upload photo</h5>
          <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
            </Col>
          </Container>
          <Col md={12} className="horizontalStyling mt-4">
          {photo.map(pic=>(
            <a
              href={pic.photo}
              data-type="image"
              data-toggle="lightbox"
            >
              <img
                src={pic.photo}
                className="img-fluid px-1 img-thumbnail"
                alt={pic.photo}
              />
            </a>
            ))}
          </Col>   
         
          </div>   
        )
    }
}


export default Gallery