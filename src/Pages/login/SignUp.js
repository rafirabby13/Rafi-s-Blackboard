import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider.js";

const SignUp = () => {
    const {user, createUserWithEmailPass} = useContext(AuthContext);

    const handleSignUp=(e)=>{
        e.preventDefault();
    const form = e.target;
  
      const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailPass(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error("error", error);
        })
    }
   

  return (
    <div>
      <div className="form ">
      <h2 style={{textAlign:"center", fontWeight:"bolder", color:" rgb(244, 15, 198)"}}>Sign Up</h2>
        

        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="fullName"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>PhotoURL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your photo Url"
              name="photoURL"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <p>
            Already have an account? <Link style={{color:" rgb(244, 15, 198)"}} to="/login">Login</Link>
          </p>
          <Button className="btn-login" variant="outline-info" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
