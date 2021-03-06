import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class UserProfile extends Component {
    render() {
        const {users} = this.props;
        if(users){
          return (
            <div>
                <Container>
                    <Row>
                        <Col><h1 className="pt-5 pl-3 text-left title-font">Owner Information</h1></Col>
                        </Row>
            
            {users.map(user=>(
              <div key={user.id}>
                <Row>
              <Col lg="8" sm="12"> 
               <Table  className="my-5">
      <tbody>
        <tr key={user.id}>
          <th scope="row">First Name</th>
          <td>{user.firstName}</td>
        </tr>
        <tr>
          <th scope="row">Last Name</th>
          <td>{user.lastName}</td>
        </tr>
        <tr>
          <th scope="row">Phone</th>
          <td>{user.phone}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{user.email}</td>
        </tr>
      </tbody>        
    </Table>
       </Col>
       <Col lg="4" sm="12">
           <div className="d-flex justify-content-center">
           <Link to={`editOwner/${user.id}`}><Button className="mt-5" variant="secondary">Edit</Button> </Link>
           </div>
       </Col>
       </Row>
       </div>
    ))}
 
                    <Link to="/addOwner"><Button className="mt-5 mb-3" variant="warning">Add Owner</Button></Link>

                </Container>
            </div>
        )

        }else{
          return <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> 
        }
    }
}

UserProfile.propTypes={
    firestore:PropTypes.object.isRequired,
    users: PropTypes.array
}
export default compose(firestoreConnect([{collection:'users'}]),
connect((state, props) => ({
    users:state.firestore.ordered.users
}))
)(UserProfile);