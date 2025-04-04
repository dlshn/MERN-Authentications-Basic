import React from 'react'
import Signup from './pages/signup';
import Signin from './pages/signin';
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
      </Routes>
    </Router>
        
    </>
  )
}

export default App
