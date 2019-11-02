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
import PetDoc from './components/profile home/PetDoc'
import Owner from './components/user/UserProfile';
import Register from './components/user/Registration';
import AddDiet from './components/add sections/AddDiet';
import AddMed from './components/add sections/AddMed';
import AddNote from './components/add sections/AddNote';
import AddGallery from './components/add sections/AddGallery';
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
     <Route path="/pet/:id" component={PetDoc}/>
       <Route path="/owner" exact component={Owner} />
       <Route path="/register" exact component={Register} />
       <Route path="/AddPet" exact component={AddPet} />
       <Route path="/addDiet/:id" exact component={AddDiet} />
       <Route path="/edit" exact component={Edit} />
       <Route component={Error} />
       </Switch>
              </div>
                    </Router>
                    </Provider>

  );
}

export default App;
