import { useState } from 'react'
import { Upper } from './components/upper/Upper'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Upper />
   </>
  )
}

export default App
