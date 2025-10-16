import React from 'react'
import Input from '../components/input_field'
import './index.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Application Form in React</h1>
      <Input label ="First Name" place="first name" />
      <Input label ="Last Name" place="last name" />
      <Input label ="Email" place="email"/>
      <Input label ="Contact" place="contact"/>
    </div>
  )
}
export default App