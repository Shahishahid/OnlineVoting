import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ElectionsList from './pages/ElectionsList'
import BallotScreen from './pages/BallotScreen'
import VoteSuccess from './pages/VoteSuccess'
import Results from './pages/Results'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'


export default function Router() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/elections" element={<ElectionsList />} />
<Route path="/ballot/:id" element={<ProtectedRoute><BallotScreen /></ProtectedRoute>} />
<Route path="/vote-success" element={<ProtectedRoute><VoteSuccess /></ProtectedRoute>} />
<Route path="/results/:id" element={<Results />} />
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
<Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
</Routes>
)
}