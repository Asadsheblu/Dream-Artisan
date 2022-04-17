
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword,useSignInWithGoogle,useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from "../../../firebase_init"
import google from "../../../images/logo-google/icons8-google.svg"
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      console.log(user)
      const [signInWithGoogle] = useSignInWithGoogle(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );
      const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/';
    if(user){
      navigate(from, {replace: true});
    }
      
      const handelEmail=(e)=>{
          setEmail(e.target.value)
      }
      const handelPassword=(e)=>{
          setPassword(e.target.value)
      }
      
      const handelSignin=(e)=>{
        e.preventDefault()
        
        signInWithEmailAndPassword(email,password)
    
       
      }
      const handelResetPassword=async()=>{
        await sendPasswordResetEmail(email)
        alert("sent Password Your Email")
      }
    return (
        <div>
            <div className="w-75 mx-auto bg-light shadow p-5 m-5">
            <h4 className="text-center">Please SignIn</h4>
            <div className='w-50 mx-auto'>

           
            <Form onSubmit={handelSignin}>
            
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handelPassword}  type="password" placeholder="Password" required/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
 <h6> Are You new Dream Artisan? <Link className="text-decoration-none fs-4" to="/login">Sign Up</Link></h6> 
 <br />
    <h6>Forgot Your Password?<Button onClick={handelResetPassword} className="fs-6" variant="btn btn-link">Reset</Button></h6>
  <Button variant="primary" className="w-50 rounded-pill" type="submit">

    Login
  </Button>
  <br />
  <Button className="mt-3 w-50 p-3" variant="info" onClick={()=>signInWithGoogle()}>Sign In With <img width={20} src={google} alt="" /></Button>
  <ToastContainer />
</Form>
        </div>
         </div>
        </div>
    );
};

export default Login;