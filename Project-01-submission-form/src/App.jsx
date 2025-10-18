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
        <label >Gender</label><br/>
      <input type='radio' id='male'/>
      <label for="male">Male</label>
      <input type='radio' id='female'/>
      <label for="female">Female</label>
      <input type='radio' id='others'/>
      <label for="others">Others</label>
      </div>
      <div>
      <label >Your Best Subjects</label><br/>
      <input type='checkbox'id='English'/>
      <input type='checkbox' id='math'/>
      <label for="math">Maths</label>
      <input type='checkbox' id='science'/>
      <label for="science">Science</label>
      </div>
      <label>Upload Resume</label><br/>
      <input type='file'/><br/>
      <label>Select your choice</label><br/>
      <select>
        <option>Select your ans</option>
      </select><br/>
      <label>About</label><br/>
      <textarea placeholder='about yourself'></textarea><br/>
      <label>Submit OR Reset</label>
      <button type='reset'>Reset</button>
      <button type='submit+'>Submit</button>
      </form>
    </div>
  )
}
export default App