import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (formData.fullName && formData.email && formData.password) {
      navigate("/account");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone number" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email address" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="company" placeholder="Company name" onChange={handleChange} />
      <div className="radio-group">
        <label>Are you an Agency?</label>
        <label>
          <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === "yes"} onChange={handleChange} /> Yes
        </label>
        <label>
          <input type="radio" name="isAgency" value="no" checked={formData.isAgency === "no"} onChange={handleChange} /> No
        </label>
      </div>
      <button className="btn primary" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;
