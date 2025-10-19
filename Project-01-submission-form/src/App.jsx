import React from 'react'
import Input from '../components/input_field'
import './index.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Application Form in React</h1>
      <form className='form-container'>
        <Input label ="First Name" place="first name" />
      <Input label ="Last Name" place="last name" />
      <Input label ="Email" place="email"/>
      <Input label ="Contact" place="contact"/>
      <div>
        <label className="input-label">Gender</label><br/>
      <input type='radio' id='male' name='gender' className="input"/>
      <label htmlFor="male">Male</label>
      <input type='radio' id='female' name='gender' className="input"/>
      <label htmlFor="female">Female</label>
      <input type='radio' id='others' name='gender' className="input"/>
      <label htmlFor="others">Others</label>
      </div>
  <div>
  <label className="input-label">Your Best Subjects</label><br/>
  <input type='checkbox' id='javaScript' className="input"/>
  <label htmlFor="javaScript">JavaScript</label>
  <input type='checkbox' id='react' className="input"/>
  <label htmlFor="react">React</label>
  <input type='checkbox' id='css3' className="input"/>
  <label htmlFor="css3">CSS3</label>
  </div>
      <label className="input-label" htmlFor="resume">Upload Resume</label><br/>
      <input type='file' id='resume' className="input"/><br/>
      <label className="input-label" htmlFor="choice">Select your choice</label><br/>
      <select id='choice' className="input">
        <option>Select your ans</option>
      </select><br/>
      <label className="input-label" htmlFor="about">About</label><br/>
      <textarea id='about' className="input" placeholder='about yourself'></textarea><br/>
      
        <label className="input-label">Submit OR Reset</label><br/>
      <div className='bottom'>
      <button type='reset' className="btn">Reset</button>
      <button type='submit' className="btn">Submit</button>
      </div>
      </form>
    </div>
  )
}
export default App