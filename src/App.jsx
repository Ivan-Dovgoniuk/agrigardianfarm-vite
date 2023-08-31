import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
// import Payment from './components/Payment'
// import Verify from './components/Verify'
import { Header } from './components/Header'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/info" element={<UserProfile/>} />
          {/* <Route path="/pay" element={<Payment />} />
          <Route path='/verify' element={<Verify />} /> */}
        </Routes>
    </Router>
  )
}
export default App