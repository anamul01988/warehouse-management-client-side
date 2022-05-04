import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(loading || sending){
        return <Loading/>
    }
    if(error){
      console.log(error.message);
    }
    if(!user){
        return <Navigate to='/login' state = {{from: location}} replace/>
    }

    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
        return  <div className='container'>
            
                <h3 className='text-warning'>You've given unverified Email!!</h3>
            <h5 className='text-danger'>Please Verify your email address.</h5>
            <button
            className='btn btn-secondary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       Please Verify email again
      </button>
      <ToastContainer/>
            
        </div>
    }
    return children;
};

export default RequireAuth;