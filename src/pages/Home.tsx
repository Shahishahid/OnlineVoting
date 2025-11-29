import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
return (
<div>
<h1>Welcome to Secure Voting</h1>
<p><Link to="/elections">View active elections</Link></p>
</div>
)
}