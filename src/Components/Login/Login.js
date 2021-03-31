import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
 }

const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }
  
  

  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const user = result.user;
        setLoggedInUser(user);
        history.replace(from)
      }).catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <div className="container">
      <h3 className="text-center">Sign up to continue</h3>
      <div className="mx-auto p-4 w-50" >
          <div className="mb-3 border rounded text-center">
            <p onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }}>Sign up with google</p>
          </div>
      </div>
      </div>
  );
};

export default Login;