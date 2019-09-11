import React, { Component } from 'react';
import {
    Table
  } from "react-bootstrap";
  import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


class Diet extends Component {
  static propTypes={
    diettype:PropTypes.string.isRequired,
    dietname:PropTypes.string.isRequired,
    mealtimes:PropTypes.number.isRequired,
    volume:PropTypes.number.isRequired,
    volumemeasure:PropTypes.string.isRequired,
    dietother:PropTypes.string.isRequired
}
    render() {
        const{diets} = this.props;
        return (
          <div>
          {diets.map(diet => (
                <div className="p-3 mt-2 bg-white">
                       <div className="d-flex align-items-stretch"> 
                       <h4 className="w-100">{diet.diettype}</h4>
                       <FontAwesomeIcon icon={faTimes} className="flex-shrink-1" />
                       </div>
                        
                       <Table>
                         <tbody>
                           <tr>
                             <td className="font-weight-bold">Name:</td>
                             <td>{diet.dietname}</td>
                           </tr>
                           <tr>
                             <td className="font-weight-bold">Meal times:</td>
                             <td>{diet.mealtimes} times a day</td>
                           </tr>
                           <tr>
                             <td className="font-weight-bold">Volume:</td>
                             <td>{diet.volume} {diet.volumemeasure}</td>
                           </tr>
                           <tr>
                             <td className="font-weight-bold">Other:</td>
                             <td>{diet.dietother}</td>
                           </tr>
                         </tbody>
                       </Table>
                </div>
                ))}
                </div>
        )
    }
}

export default Diet