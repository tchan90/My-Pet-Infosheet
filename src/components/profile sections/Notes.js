import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes,faPenNib} from "@fortawesome/free-solid-svg-icons";

class Notes extends Component {
    render() {
        const {note} = this.props;
        return (
          <div>
          <div className="mt-2 p-3 bg-white">
          <div className="d-flex justify-content-end"> 
                   <div><span className="mx-4"><FontAwesomeIcon icon={faPenNib} /></span>
                 <span><FontAwesomeIcon icon={faTimes} /></span>
                  </div>
                   </div> 
                   <ul>
                     <li>{note}</li>
                   </ul>        
        </div>
            </div>
        )
    }
}

export default Notes