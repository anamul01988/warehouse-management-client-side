import React, { useRef } from "react";
import "./Login.css";
import { Button } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../common/Loading/Loading";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log(from);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("check your email");
    } else {
      toast("Please enter your email address");
    }
  };

  if (loading || sending) {
    return <Loading />;
  }

  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}{" "}
      </p>
    );
  }

  if (user) {
    // console.log(user)
    console.log(from);
    navigate(from, { replace: true });
  }

  return (
    <div className="container my-5">
      <h4 className="text-center mb-3 ">Login Form</h4>
      <form onSubmit={handleLoginForm} className="login-form">
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
        {errorElement}
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
            <Button className="login-btn" onClick={resetPassword}>
              Reset Password
            </Button>
          </p>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Login;
