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
import EditDiet from './components/profile sections/editSections/editDiet';
import EditMed from './components/profile sections/editSections/editMed';
import EditNote from './components/profile sections/editSections/editNote';
import PetDoc from './components/profile home/PetDoc'
import Owner from './components/user/UserProfile';
import AddOwner from './components/user/AddOwner';
import EditOwner from './components/user/EditOwner';
import AddDiet from './components/add sections/AddDiet';
import AddMed from './components/add sections/AddMed';
import AddNote from './components/add sections/AddNote';
import AddGallery from './components/add sections/AddGallery';
import Error from './components/Error';



function App() {
  return (
    <Provider store={store}>
      <Router> 
      <div className="content"> 
       <Navigation />
       <Switch> 
       <Route path="/" exact component={Home} />
       <Route path="/about" exact component={About} />
       <Route path="/pets" exact component={PetFile} />
     <Route path="/pet/:id" component={PetDoc}/>
       <Route path="/owner" exact component={Owner} />
       <Route path="/addOwner" exact component={AddOwner} />
       <Route path="/editOwner/:id" exact component={EditOwner} />
       <Route path="/AddPet" exact component={AddPet} />
       <Route path="/addDiet/:id" exact component={AddDiet} />
       <Route path="/addMed/:id" exact component={AddMed} />
       <Route path="/addNote/:id" exact component={AddNote} />
       <Route path="/addPhoto/:id" exact component={AddGallery} />
       <Route path="/editPetFile/:id" exact component={Edit} />
       <Route path="/:id1/editDiet/:id2" exact component={EditDiet} />
       <Route path="/:id1/editMed/:id2" exact component={EditMed} />
       <Route path="/:id1/editNote/:id2" exact component={EditNote} />
       <Route component={Error} />
       </Switch>
              </div>
                    </Router>
                    </Provider>

  );
}

export default App;
