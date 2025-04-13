import React from 'react'
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </Router>
        
    </>
  )
}

export default App
