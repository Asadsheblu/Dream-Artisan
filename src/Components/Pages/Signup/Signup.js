import React from 'react';

import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className="w-75 mx-auto bg-light shadow p-5 m-5">
            <h4 className="text-center">Please Registration</h4>
            <div className='w-50 mx-auto'>

           
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confrim Password</Form.Label>
    <Form.Control type="password" placeholder="Confrim-Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
 <h6> Alreday SignUp? <Link className="text-decoration-none fs-4" to="/login">Login</Link></h6> 
 <br />
  <Button variant="primary" type="submit">
    SignUp
  </Button>
</Form>
        </div>
         </div>
    );
};

export default Signup;