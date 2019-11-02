import React, { Component } from 'react';
import {
    Table
  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faPenNib} from "@fortawesome/free-solid-svg-icons";


class Diet extends Component {
    render() {
        const{name, notes, type} = this.props;
        return (
          <div>
                <div className="p-3 mt-2 bg-white">
                       <div className="d-flex justify-content-between"> 
                       <div><h4>{type}</h4> </div>
                       <div><span className="mx-4"><FontAwesomeIcon icon={faPenNib} /></span>
                     <span><FontAwesomeIcon icon={faTimes} /></span>
                      </div>
                       </div> 
                       <Table>
                         <tbody>
                           <tr>
                             <td className="font-weight-bold">Name:</td>
                             <td>{name}</td>
                           </tr>
                           <tr>
                             <td className="font-weight-bold">Other:</td>
                             <td>{notes}</td>
                           </tr>
                         </tbody>
                       </Table>
                </div>
                </div>
        )
    }
}

export default Diet