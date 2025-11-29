import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'


export default function Login(){
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const nav = useNavigate()


async function onSubmit(e: React.FormEvent){
e.preventDefault()
try{
const token = await authService.login({ email, password })
localStorage.setItem('token', token)
nav('/dashboard')
}catch(err){ alert('Login failed') }
}


return (
<form onSubmit={onSubmit} style={{ maxWidth: 420 }}>
<h2>Login</h2>
<input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
<input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
<button type="submit">Login</button>
</form>
)
}