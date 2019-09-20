import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './Context'

import Home from './components/layout/Home';
import Navigation from './components/layout/Nav';
import PetFile from './components/profile home/PetFile';
import AddPet from './components/profile home/AddPet';
import Profile from './components/profile home/Profile';
import Register from './components/user/Registration';
import Error from './components/Error'

class App extends Component {
  render() { 
  return (
      <Router> 
        <Provider>
      <div className="content"> 
       <Navigation />
       <Switch> 
       <Route path="/" exact component={Home} />
       <Route path="/user" exact component={PetFile} />
       <Route path="/register" exact component={Register} />
       <Route path="/addPet" exact component={AddPet} />
       <Route path="/user/:petId" exact component={Profile} />
       <Route component={Error} />
       </Switch>
              </div>
              </Provider>
                    </Router>
  );
}
}


export default App;
