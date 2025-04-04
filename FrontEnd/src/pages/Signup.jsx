import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/api/user/signup", {
      firstName,
      lastName,
      email,
      password
    }).then(response => {
      console.log(response);
      e.target.reset();
    }).catch(error => {
      console.log(error);
    });


  }
  return (
    <>
      <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Signup</button>
        </form>
        <Link to="/signin">Go to Signin</Link>
      </div>
    </>
  );
};

export default Signup;
