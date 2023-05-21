import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form ">
      <h2>Login</h2>

      <Form>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p>Don't have an account? <Link to='/register'>SignUp</Link></p>
        <Button className="btn-login" variant="outline-info" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
