import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword,useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import auth from "../../../firebase_init"
import google from "../../../images/logo-google"
const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confrimPassword,setconfrimPassword]=useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification, sending] = useSendEmailVerification(auth)
      const [signInWithGoogle]=useSignInWithGoogle(auth)
      console.log(user)
      const handelEmail=(e)=>{
          setEmail(e.target.value)
      }
      const handelPassword=(e)=>{
          setPassword(e.target.value)
      }
      const handelConfrimPassword=(e)=>{
          setconfrimPassword(e.target.value)
      }
      const handelSignup=async(e)=>{
        e.preventDefault()
        
       await createUserWithEmailAndPassword(email,password)
       await sendEmailVerification(email,password);
          toast('Sent Verification email');
       
       
       
      }
    return (
        <div className="w-75 mx-auto bg-light shadow p-5 m-5">
            <h4 className="text-center">Please Registration</h4>
            <div className='w-50 mx-auto'>

           
            <Form onSubmit={handelSignup}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handelPassword}  type="password" placeholder="Password"  required/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confrim Password</Form.Label>
    <Form.Control onClick={handelConfrimPassword}  type="password" placeholder="Confrim-Password" />
  </Form.Group> */}
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
 <h6> Alreday SignUp? <Link className="text-decoration-none fs-4" to="/login">Login</Link></h6> 
 <br />
  <Button variant="primary" type="submit">
    SignUp
  </Button>
  
  <ToastContainer />
  <div className='d-flex align-items-center'>
 <div style={{height:"1px"}} className="bg-primary w-50"></div>
  <p className="mt-2 px-2">Or</p>
  <div style={{height:"1px"}} className="bg-primary w-50"></div>
 </div>
 <Button onClick={()=>signInWithGoogle()} className="w-100 rounded-pill" variant="dark" type="submit">
    Registration with <img width="20px" className="img-fluid" src={google} alt="" />
  </Button>
</Form>

        </div>
         </div>
    );
};

export default Signup;