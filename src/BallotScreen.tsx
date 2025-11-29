import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import electionService from '../services/electionService'
import voteService from '../services/voteService'


export default function BallotScreen(){
const { id } = useParams()
const nav = useNavigate()
const [election,setElection] = useState<any>(null)
useEffect(()=>{ if(id) electionService.get(id).then(r=>setElection(r)) },[id])


const cast = async (candidateId:string)=>{
await voteService.cast({ electionId: id!, candidateId })
nav('/vote-success')
}


if(!election) return <div>Loading...</div>
return (
<div>
<h2>{election.title}</h2>
<ul>
{election.candidates?.map((c:any)=>(
<li key={c._id}>{c.name} <button onClick={()=>cast(c._id)}>Vote</button></li>
))}
</ul>
</div>
)
}