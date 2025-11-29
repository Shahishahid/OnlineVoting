import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import electionService from '../services/electionService'


export default function Results(){
const { id } = useParams()
const [results,setResults] = useState<any>(null)
useEffect(()=>{ if(id) electionService.results(id).then(r=>setResults(r)) },[id])
if(!results) return <div>Loading...</div>
return (
<div>
<h2>Results</h2>
<pre>{JSON.stringify(results, null, 2)}</pre>
</div>
)
}