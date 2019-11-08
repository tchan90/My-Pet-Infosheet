import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Gallery extends Component {
    render() {
        const{photo} = this.props;
        if(photo){
          return (
            <div> 
              <Row> 
           {photo.map(p => (
           <Col md={4} sm={12} className="horizontalStyling mt-4" key={p.id}>
             <img
               src={p.photo}
               className="img-fluid px-1 img-thumbnail"
               alt={p.photo}
             />      
           </Col>   
       ))}
       </Row>
            </div>   
          )

        }else{
          return <div class="d-flex justify-content-center py-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div> 
        }
    }
}
Gallery.propTypes={
  photo: PropTypes.array,
}

export default Gallery

