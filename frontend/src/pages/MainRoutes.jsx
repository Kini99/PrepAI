import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import Interview from './Interview'
import InterviewCards from '../components/InterviewCards'
import Review from './Review'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path ="/dashboard" element={<Dashboard/>} />
        <Route path ="/interview" element={<Interview/>} />
        <Route path ="/review" element={<Review/>} />
    </Routes>
  )
}

export default MainRoutes