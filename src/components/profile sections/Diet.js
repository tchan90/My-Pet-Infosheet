import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Table} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenNib} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

class Diet extends Component {
  
    render() {
       const{diet, petId} = this.props;
       if(diet){
        return (
          <div>
            {diet.map(d => (
        <div className="p-3 mt-2 bg-white" key={d.id}>
        <div className="d-flex justify-content-between"> 
        <div><h4>{d.diettype}</h4> </div>
       <div>
        <Link to={`/${petId}/editDiet/${d.id}`}><span className="mx-4"><FontAwesomeIcon icon={faPenNib} /></span> </Link> 
       </div>
        </div> 
        <Table>
          <tbody>
            <tr>
              <td className="font-weight-bold">Name:</td>
              <td>{d.dietname}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Other:</td>
              <td>{d.dietother}</td>
            </tr>
          </tbody>
        </Table>
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
Diet.propTypes={
  diet: PropTypes.array,
}

export default Diet;


