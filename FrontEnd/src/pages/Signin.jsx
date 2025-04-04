import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/api/user/login", {
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
    <div className='signin'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Email' 
                onChange={(e)=>setEmail(e.target.value)}/>

                <input type="password" placeholder='Password' 
                onChange={(e)=>setPassword(e.target.value)}/>
                
                <button type="submit">Signin</button>
            </form>
            <Link to="/signup">Go to Signup</Link>
        </div>
    </>
  )
}

export default Signin