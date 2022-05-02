import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
     const navigate = useNavigate();
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleLoginForm = (event) =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate('/home')
    }
  return (
    <div className="my-5">
      <form onClick={handleLoginForm} className="w-50 mx-auto">
        <div className="mb-3">
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            placeholder="email@gmail.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            ref={passRef}
            className="form-control"
            placeholder="password"
            id="exampleInputPassword1"
          />
        </div>

        <div className="login-content d-flex justify-content-between align-item-center">
          <p className="mt-1">
            New User?{" "}
            <Link
              to="/register"
              className="text-primary pointer-cursor pe-auto text-decoration-none"
            >
              Please Register
            </Link>
          </p>
          <p>
            Forget Password?{" "}
            <Button >Reset Password</Button>
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
