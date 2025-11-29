import React from 'react'
import { Navigate } from 'react-router-dom'


// very small mock: replace with real auth selector
const useAuth = () => ({ isAuthenticated: !!localStorage.getItem('token') })


export default function ProtectedRoute({ children }: { children: React.ReactNode }){
const { isAuthenticated } = useAuth()
if(!isAuthenticated) return <Navigate to="/login" replace />
return <>{children}</>
}