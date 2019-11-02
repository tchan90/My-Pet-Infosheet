import React, { Component } from 'react'
import {
    Table,
  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faPenNib} from "@fortawesome/free-solid-svg-icons";

class Medicine extends Component {
    render() {
        const {name, type, notes} = this.props;
        return (
          <div>
              <div className="mt-2 p-3 bg-white">
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
                    <td className="font-weight-bold">Notes:</td>
                    <td>{notes}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
                </div>
        )
    }
}

export default Medicine 