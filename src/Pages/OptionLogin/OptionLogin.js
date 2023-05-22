import React from "react";
import { Button } from "react-bootstrap";
import "./OptionLogin.css";
import { Link } from "react-router-dom";

const OptionLogin = () => {
  return (
    <div className="option-btn">
      <button className="login-btn" variant="outline-success">
        <Link className="link" to="/login">Login with Google</Link>
      </button>
      <br />
      <br />
      <button className="login-btn" variant="outline-success">
        <Link className="link" to="/login">Login with Github</Link>
      </button>
      
      <br />
      <br />
      <button className="login-btn" variant="outline-success">
        <Link className="link" to="/login">Login with email</Link>
      </button>
    </div>
  );
};

export default OptionLogin;
