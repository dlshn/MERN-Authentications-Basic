import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:8080/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        setUser(res.data); // Save user info in state
      }).catch(err => {
        console.log("Error fetching profile:", err);
      });
    }
  }, [token]); // Run this effect only once on mount

  if (!user) {
    return <p>Loading user data...</p>;
  }

  const logout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/signin"); // Redirect to sign-in page
  }

  return (
    <>
    <div className='profile'>
        <h1>Profile</h1>
        <p>Welcome, {user.firstName}!</p>
        <p>Email: {user.email}</p>
        <p>Last Name: {user.lastName}</p>
        <button className='logout' onClick={logout}>Logout</button>
    </div>
    </>
  );
};

export default Profile;
