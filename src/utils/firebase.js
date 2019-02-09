import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseRepository } from 'hackoss';

const FirebaseContext = React.createContext(null);

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_TOKEN || '',
  authDomain: 'hackoss-admin.firebaseapp.com',
  databaseURL: 'https://hackoss-admin.firebaseio.com',
  projectId: 'hackoss-admin',
  storageBucket: 'hackoss-admin.appspot.com',
  messagingSenderId: '841474314837',
};
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
const FirebaseApp = Object.freeze(new FirebaseAppBase(config));

export default firebase;
export { FirebaseContext, FirebaseApp, withFirebase };
