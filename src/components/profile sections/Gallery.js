import React, { Component } from 'react';
import {Col, Container} from 'react-bootstrap';

class Gallery extends Component {
    render() {
        const{photo} = this.props;
        return (
          <div> 
          <Col md={12} className="horizontalStyling mt-4">
            <a
              href={photo}
              data-type="image"
              data-toggle="lightbox"
            >
              <img
                src={photo}
                className="img-fluid px-1 img-thumbnail"
                alt={photo}
              />
            </a>
          </Col>   
          </div>   
        )
    }
}


export default Gallery