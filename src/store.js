import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer, reduxFirestore} from 'redux-firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCKGIyt1SKXt0FflYHnQ0vGj6uqZLTgMz8",
    authDomain: "my-pet-info-sheet.firebaseapp.com",
    databaseURL: "https://my-pet-info-sheet.firebaseio.com",
    projectId: "my-pet-info-sheet",
    storageBucket: "my-pet-info-sheet.appspot.com",
    messagingSenderId: "153399056315",
    appId: "1:153399056315:web:dcd1ea09f10d9ba592169e"
  };

  // react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
     useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  // Initialize firebase instance
firebase.initializeApp(firebaseConfig)

//Init firebase
const firestore = firebase.firestore();

const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

//Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase=compose(
    reactReduxFirebase(firebase,rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  })

  // Create store with reducers and initial state
const initialState = {};

//create store
const store=createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
export default store;