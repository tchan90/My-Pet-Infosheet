import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Home from './components/layout/Home';
import About from './components/About'
import Navigation from './components/layout/Nav';
import PetFile from './components/profile home/PetFile';
import AddPet from './components/profile home/AddPet';
import Edit from './components/profile home/Edit';
//import Profile from './components/profile home/Profile';
import PetDoc from './components/profile home/PetDoc'
import Owner from './components/user/UserProfile';
import Register from './components/user/Registration';
import Error from './components/Error'

function App() {
  return (
    <Provider store={store}>
      <Router> 
      <div className="content"> 
       <Navigation />
       <Switch> 
       <Route path="/" exact component={Home} />
       <Route path="/about" exact component={About} />
       <Route path="/user" exact component={PetFile} />
     {/*}  <Route path="/user/:Id" exact component={Profile} /> */}
     <Route path="/pet/:id" component={PetDoc}/>
       <Route path="/owner" exact component={Owner} />
       <Route path="/register" exact component={Register} />
       <Route path="/addPet" exact component={AddPet} />
       <Route path="/edit" exact component={Edit} />
       <Route component={Error} />
       </Switch>
              </div>
                    </Router>
                    </Provider>

  );
}

export default App;
