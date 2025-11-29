import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
<Link to="/">SVS</Link> | <Link to="/elections">Elections</Link> | <Link to="/dashboard">Dashboard</Link>
</nav>
)
}