import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import Interview from './Interview'

const MainRoutes = () => {
  return (
    <Routes>
        <Route to="/" element={<Home/>} />
        <Route to="/login" element={<Login/>} />
        <Route to="/dashboard" element={<Dashboard/>} />
        <Route to="/interview" element={<Interview/>} />
    </Routes>
  )
}

export default MainRoutes