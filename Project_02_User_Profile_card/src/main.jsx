import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './App.jsx'
// import {Mockdata} from './assets/Mockdata.jsx';

createRoot(document.getElementById('root')).render(
   <>
      <Card />
      <Card />
      <Card />
      <Card />
   </>
   
)
