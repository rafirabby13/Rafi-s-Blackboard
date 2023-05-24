import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider.js";

const Login = () => {
  const { user, loginWithEmailPass } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace:true});
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div className="form ">
      <h2 style={{textAlign:"center", fontWeight:"bolder", color:" rgb(244, 15, 198)"}}>Login</h2>

      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>
        <p>
          Don't have an account? <Link style={{color:" rgb(244, 15, 198)"}} to="/register">SignUp</Link>
        </p>
        <Button className="btn-login" variant="outline-info" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
