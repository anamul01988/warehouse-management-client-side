import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../common/Loading/Loading';
import google from '../../asset/login/google.png';
import './SocialLogin.css';
import auth from '../../firebase.init';
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);  const navigate = useNavigate();
    
    let errorElement;
    if(loading ){
      return <Loading/>
    }
    if (error) {
      errorElement =  <p className="text-danger">Error: {error?.message} </p>
    }
  if (user) {
    navigate("/");
  }
    return (
        <div className="container">
        <div className="d-flex align-items-center w-100 mx-auto">
          <div style={{ height: "1px" }} className="bg-primary w-50"> </div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50">
            {" "}
          </div>
        
        </div>
        {errorElement}
  
        <div className="social-btn">
          <button 
              onClick={() => signInWithGoogle()}
          className="btn bg-warning  d-block mx-auto my-2 ">
            <img style={{ width: "30px" }} src={google} alt="google" />
            <span className="px-2">Sign In By Google</span>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;