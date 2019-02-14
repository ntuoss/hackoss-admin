import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseRepository } from 'hackoss';
import { FIREBASE_CONFIG } from '../constants';

const FirebaseContext = React.createContext(null);

class FirebaseAppBase extends FirebaseRepository {
  constructor(configuration) {
    super(configuration);
    this.auth = firebase.auth();
  }

  signin = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signout = () => this.auth.signOut();
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {fb => <Component {...props} firebase={fb} />}
  </FirebaseContext.Consumer>
);
const FirebaseApp = Object.freeze(new FirebaseAppBase(FIREBASE_CONFIG));

export { FirebaseContext, FirebaseApp, withFirebase };
