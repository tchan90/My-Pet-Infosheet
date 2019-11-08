import React, { Component } from 'react'
import {
    Table,
  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {faPenNib} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

class Medicine extends Component {
    render() {
      const{med,petId} = this.props;
      if(med){
       return (
         <div>
           {med.map(m => (
       <div className="p-3 mt-2 bg-white" key={m.id}>
       <div className="d-flex justify-content-between"> 
       <div><h4>{m.medtype}</h4> </div>
      <div> <Link to={`/${petId}/editMed/${m.id}`}><span className="mx-4"><FontAwesomeIcon icon={faPenNib} /></span> </Link> 
      </div>
       </div> 
       <Table>
         <tbody>
           <tr>
             <td className="font-weight-bold">Name:</td>
             <td>{m.medname}</td>
           </tr>
           <tr>
             <td className="font-weight-bold">Other:</td>
             <td>{m.mednotes}</td>
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
Medicine.propTypes={
  med: PropTypes.array,
}

export default Medicine 