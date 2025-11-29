import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import electionService from '../services/electionService'


export default function ElectionsList(){
const [list,setList] = useState<any[]>([])
useEffect(()=>{ electionService.list().then(r=>setList(r)) },[])
return (
<div>
<h2>Active Elections</h2>
<ul>
{list.map(e=> <li key={e._id}><Link to={`/ballot/${e._id}`}>{e.title}</Link></li>)}
</ul>
</div>
)
}