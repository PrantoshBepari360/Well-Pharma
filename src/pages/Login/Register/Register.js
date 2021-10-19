import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import initializeAuthentication from "../Firebase/Firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
  } from "firebase/auth";

initializeAuthentication()

const Register = () => {
    const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      console.error("password must need to be at least 6 characters");
      return;
    } else {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        verifyEmail();
      })
      .catch((error) => setError(error.message));
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };


    const {signInWithGoogle} = useAuth();
    return (
        <div>
          <h2>{error.email}</h2>
            <div className="py-5">
                <h2>Create Account</h2>
                <form onSubmit={handleOnSubmit}>
                    <input
                    onChange={handleEmailChange}
                        type="email"
                        name="email"
                        placeholder="Your email"
                    />
                    <br />
                    <input
                     onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        placeholder="Your password"
                    />
                    <br />
                    <input className="fs-4" type="submit" value="Register"/>
                </form>
                <p className="mt-3 fs-4">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                <div> -----------or---------- </div>
                <button onClick={signInWithGoogle} className="btn btn-primary">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;
