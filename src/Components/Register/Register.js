import React, { useContext, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import { fireAuthContext } from "../../UserContext/UserContext";
import { Link } from 'react-router-dom'
const auth = getAuth(app);



const Register = () => {
  const { createUser, profileUpdate } = useContext(fireAuthContext);
  const [accepted, setAccepted] = useState(false)  
  const registerBtn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Please go to login page");
        // ...
        handleUserUpdate(name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleUserUpdate = (name) => {
    const profile = {
      displayName: name,
    };

    profileUpdate(profile)
      .then(() => {})
      .catch(() => {});
  };

  const handleCheckBox = (event) =>{
      setAccepted(event.target.checked)
  }
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-11 ">
            <h1 className="m-3 p-3 text-5xl font-bold">Register now!</h1>
            <form onSubmit={registerBtn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled = {!accepted}>Register</button>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span>Accept Me</span>
                  <span className="label-text link link-hover ">{<> <Link to='/terms'> Terms and Conditions</Link> </>}</span>
                  <input onClick={handleCheckBox} type="checkbox"  className="checkbox" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
