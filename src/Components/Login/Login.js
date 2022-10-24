import React, { useContext } from "react";
import {useNavigate , useLocation} from 'react-router-dom'
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { fireAuthContext } from "../../UserContext/UserContext";

const auth = getAuth(app);


const Login = () => {
    let location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const  navigate = useNavigate()
    const { signUser , googleLoginPopUp, githubLoginPopUp } = useContext(fireAuthContext);
    const loginBtn = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
      signUser(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate(from, {replace: true})
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };


    const googleLoginHandler = () => {
      googleLoginPopUp().then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        
        
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        // ...
      });
    }
    const githubLoginHandler = () => {
      githubLoginPopUp().then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        
        
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        // ...
      });
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="m-3 p-3 text-6xl font-bold">Login now!</h1>
            <form onSubmit={loginBtn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
                  placeholder="Password"
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
                <button className="btn btn-primary m-2">Login</button>
                <button onClick={githubLoginHandler} className="btn btn-secondary m-2">Github Login</button>
                <button onClick={googleLoginHandler} className="btn btn-secondary m-2">Google Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
