import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import {Link} from 'react-router-dom'
import DairyHome from '../dairyHome'
import '../style.css'


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
      <div >
    <header >
    
      {
        user 
          ? <DairyHome user={user} signOut={signOut}  />
          : <div>
              <div class="form">
      
      <form class="login-form" action="" method="post">
        <h2>Login</h2>
        <div class="icons">
          
          <a href="#"><i class="fab fa-google" onClick={signInWithGoogle}></i></a>
          
          
         
        </div>
        <input type="text" name="" value="" placeholder="Username" required />
        <input type="password" name="" value="" placeholder="Password" required />
        <button type="submit" name="button">Login</button>
        <p class="options">Not Registered? <a href="/#">Create an Account</a></p>
      </form>
      
    </div>
          </div>
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