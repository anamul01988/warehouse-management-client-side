import React, { useRef } from "react";
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const confirmPassRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegisterSubmit =(event)=>{
       event.preventDefault();
       const userName = userNameRef.current.value;
       const email = emailRef.current.value;
       const pass = passRef.current.value;
       const confirmPass = confirmPassRef.current.value;
    //   const userName = event.target.name.value;
    //   const email = event.target.email.value;
    //   const pass = event.target.password.value;
    //   const confirmPass = event.target.confirmPassword.value;

       console.log(userName, email, pass, confirmPass)
       createUserWithEmailAndPassword(email, pass);
    }

 
      if(user){
         navigate('/login');
        // console.log('user', user)
    }

  return (
    <div className="my-5">
      <form onClick={handleRegisterSubmit} className="w-50 mx-auto">
      <div className="mb-3">
          <input
            type="text"
            ref={userNameRef}
            className="form-control"
            placeholder="User-name"
            name="name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />    
        </div>
        <div className="mb-3">
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            placeholder="email@gmail.com"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />    
        </div>
        <div className="mb-3">
          <input
            type="password"
            ref={passRef}
            className="form-control"
            placeholder="password"
            name="password"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            ref={confirmPassRef}
            className="form-control"
            placeholder="confirm-password"
            name="confirmPassword"
            id="exampleInputPassword1"
            required
          />
        </div>
        <p>Already have an account? <Link to='/login' className="text-primary pointer-cursor pe-auto text-decoration-none" >Please Login</Link></p>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
             Accept Terms & Conditions.
          </label>
           
        
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
