import React, { useRef, useState } from "react";
import './Register.css';
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from "../../common/Loading/Loading";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [agree, setAgree] = useState(false);
    // const userNameRef = useRef('');
    // const emailRef = useRef('');
    // const passRef = useRef('');
    // const confirmPassRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating] = useUpdateProfile(auth);

    // const handleRegisterSubmit =(event)=>{
    //    event.preventDefault();
    //    const userName = userNameRef.current.value;
    //    const email = emailRef.current.value;
    //    const pass = passRef.current.value;
    //    const confirmPass = confirmPassRef.current.value;
    // //   const userName = event.target.name.value;
    // //   const email = event.target.email.value;
    // //   const pass = event.target.password.value;
    // //   const confirmPass = event.target.confirmPassword.value;

    //    console.log(userName, email, pass, confirmPass)
    //    createUserWithEmailAndPassword(email, pass);
    // }

    if(loading || updating ){
      return <Loading/>
    }
      if(user){
        //  navigate('/login');
        console.log('user', user)
    }
  

    const handleRegisterForm = async(event) =>{
      event.preventDefault();
      // console.log(event.target.email.value)
      // console.log(event.target.password.value)
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
     
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log('Updated profile');
      navigate('/');
    }

  return (
    <div className="container">
    <div className='register-form my-5'>
<h3 className='mb-3' style={{textAlign: 'center'}}>Registration Form. </h3>
<form onSubmit={handleRegisterForm}  action="">
   <input type="text" name='name' id='' placeholder='your name' required />

   <input type="email" name='email' id='' placeholder='email address' required />

   <input type="password" name='password' id='' placeholder='password' required />
   <input onClick={() => setAgree(!agree)}  type="checkbox" name="terms" id="terms" />
   <label className={`ps-2 ${agree? '': 'text-danger'}`} htmlFor="terms">Accept terms & condition</label>
   <input disabled={!agree}  className='w-50 mx-auto btn bg-warning mt-3 ' type="submit" value='Register' />
</form>
<p>Already have an account? <Link to='/login' className="text-primary pointer-cursor pe-auto text-decoration-none" >Please Login</Link></p>
{/* <SocialLogin/> */}

</div>
</div>



//     <div className="my-5">
//       <form onClick={handleRegisterSubmit} className="w-50 mx-auto">
//       <div className="mb-3">
//           <input
//             type="text"
//             ref={userNameRef}
//             className="form-control"
//             placeholder="User-name"
//             name="name"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             required
//           />    
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             ref={emailRef}
//             className="form-control"
//             placeholder="email@gmail.com"
//             name="email"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             required
//           />    
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             ref={passRef}
//             className="form-control"
//             placeholder="password"
//             name="password"
//             id="exampleInputPassword1"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             ref={confirmPassRef}
//             className="form-control"
//             placeholder="confirm-password"
//             name="confirmPassword"
//             id="exampleInputPassword1"
//             required
//           />
//         </div>
     
//         <p>Already have an account? <Link to='/login' className="text-primary pointer-cursor pe-auto text-decoration-none" >Please Login</Link></p>

//         <div className="mb-3 form-check">
//           {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
//           <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
//           <label className={`ps-2 form-check-label  ${agree? '': 'text-danger'}`}  for="exampleCheck1">
//              Accept Terms & Conditions.
//           </label>

//         </div>
//         <button type="submit" className="btn btn-primary" >
//           Submit
//         </button>
        
//       </form>

//       {/* <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
//           <p>Already have an account? <Link to='/login' className="text-primary pointer-cursor pe-auto text-decoration-none" >Please Login</Link></p>

//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form> */}
//     </div>
  );
};

export default Register;
