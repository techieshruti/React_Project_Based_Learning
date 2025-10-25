import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
<>
<h1 style={{color:"white", textAlign: "center", fontSize:"2.5rem"}}>Our Team Profiles</h1>
    <Card />
</>
)