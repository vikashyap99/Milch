import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
class SignIn extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    
    return (
      <div className="App">
    <header className="App-header">
    
      {
        user 
          ? <div><img src={user.photoURL} className="App-logo" alt="logo" /><p>Hello, {user.displayName}</p></div>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
    </header>
  </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);