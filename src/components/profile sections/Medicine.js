import React, { Component } from 'react'
import {
    Table,
  } from "react-bootstrap";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

class Medicine extends Component {
  static propTypes={
    medtype:PropTypes.string.isRequired,
    medname:PropTypes.string.isRequired,
    medfreq:PropTypes.string.isRequired,
    medroute:PropTypes.string.isRequired,
    mednotes:PropTypes.string.isRequired,
}
    render() {
        const {medication} = this.props;
        return (
          <div>
            {medication.map(meds=>(
              <div className="mt-2 p-3 bg-white">
              <div className="d-flex align-items-stretch"> 
              <h4 className="w-100">{meds.medtype}</h4>
              <FontAwesomeIcon icon={faTimes} className="flex-shrink-1" />
              </div>
              <Table>
                <tbody>
                  <tr>
                    <td className="font-weight-bold">Name:</td>
                    <td>{meds.medname}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Frequency:</td>
                    <td>{meds.medfreq}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Route:</td>
                    <td>{meds.medroute}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Notes:</td>
                    <td>{meds.mednotes}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            ))}
                </div>
        )
    }
}

export default Medicine 