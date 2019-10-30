import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
   Card, Button
  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDog, faCat} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
 
class PetCard extends Component {
 
  render() {
    const {id, name, thumbnail, animal} = this.props.pet;
    return (
      <div>
            <Card className="card-style">
     <Card.Img variant="top" src={thumbnail || "https://res.cloudinary.com/ddzbntqlz/image/upload/v1567493812/default-placeholder-general_feyzh3.png" } />
     <Card.Body>
       <Card.Title className="text-center">
         <FontAwesomeIcon icon={`${animal}` === 'Dog' ? faDog : faCat } className="mx-2" />
         {name}</Card.Title>
       <div className="d-flex justify-content-center pt-4">
       <Link to={`/pet/${id}`}><Button variant="primary" className="mx-1">View</Button></Link>
       <Button variant="danger" className="mx-1">Delete</Button>
       </div>
      
     </Card.Body>
   </Card>
         </div>
    )
  }
}

export default PetCard;

