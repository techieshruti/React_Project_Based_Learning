import { useState } from 'react'
import { Upper } from './components/upper/Upper'
import { Center } from './components/center/Center'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Upper />
    <Center />
   </>
  )
}

export default App
