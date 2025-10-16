import React from 'react'
import Input from '../components/input_field'

const App = () => {
  return (
    <div className='container'>
      <h1>Application Form in React</h1>
      <Input label ="First Name" />
      <Input label ="Last Name" />
      <Input label ="Email" />
      <Input label ="Contact" />
    </div>
  )
}
export default App