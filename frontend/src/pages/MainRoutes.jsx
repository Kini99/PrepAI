import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import Interview from './Interview'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path ="/dashboard" element={<Dashboard/>} />
        <Route path ="/interview" element={<Interview/>} />
    </Routes>
  )
}

export default MainRoutes