import React from 'react'
import Router from './Router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function App() {
return (
<div className="app-root">
<Navbar />
<main style={{ padding: 20 }}>
<Router />
</main>
<Footer />
</div>
)
}