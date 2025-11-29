import React, { useState } from 'react'
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
export default function Register(){
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const nav = useNavigate()
async function onSubmit(e:React.FormEvent){
e.preventDefault()
await authService.register({email,password})
nav('/login')
}
return (
<form onSubmit={onSubmit} style={{ maxWidth: 420 }}>
<h2>Register</h2>
<input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
<input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
<button type="submit">Register</button>
</form>
)
}