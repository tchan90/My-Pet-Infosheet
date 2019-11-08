import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {faPenNib} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

class Notes extends Component {
    render() {
        const{note,petId} = this.props;
        if(note){
         return (
           <div>
             {note.map(n => (
          <div className="mt-2 p-3 bg-white" key={n.id}>
          <div className="d-flex justify-content-end"> 
          <div>
          <div> <Link to={`/${petId}/editNote/${n.id}`}><span className="mx-4"><FontAwesomeIcon icon={faPenNib} /></span> </Link> 
      </div>  
                  </div>
                   </div> 
                   <ul>
                     <li>{n.note}</li>
                   </ul>        
        </div>
     ))}
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
Notes.propTypes={
  note: PropTypes.array,
}

export default Notes