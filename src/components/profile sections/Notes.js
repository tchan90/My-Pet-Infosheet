import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

class Notes extends Component {
    static propTypes={
        note:PropTypes.string.isRequired,
    }
    render() {
        const {note} = this.props;
        return (
            <div>
               {note.map(notes=>(
                <div className="mt-2 p-3 bg-white">
                <FontAwesomeIcon icon={faTimes} className="fa-pull-right" />
                  <ul>
                    <li className="mt-2">
                 {notes.note}
                    </li>
                  </ul>
                </div>
                ))}
                </div>
        )
    }
}

export default Notes