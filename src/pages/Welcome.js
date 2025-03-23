import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="btn primary" onClick={() => navigate("/signup")}>
        Create Account
      </button>
      <button className="btn secondary" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;
