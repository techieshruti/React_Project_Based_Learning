import React from 'react'

const Users = () => {
  return (
    <div>
      <div className='card-container'>
        <div className='top'>
          <div className='top-btn'>
            <button>Available</button>
            <h3>$55/h</h3>
          </div>
        </div>
        <div className='center'>
          <img src='https://plus.unsplash.com/premium_photo-1681488159219-e0f0f2542424?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774'/>
          <h2>Wade Wilson</h2>
          <h4>UI/UX Designer</h4>
          <div className='center-info'>
            <i></i>
          <p>Epic Coder</p>
          </div>
          <div className='center-btn'>
            <button>UI</button>
            <button>UX</button>            
            <button></button>
            <button>+4</button>            
          </div>
          <p>Wade is 32 year old UI/UX designer with an impressive portfolio behind him.</p>
        </div>
        <div className='bottom'>
          <hr/>
          <a>VIEW PROFILE</a>
        </div>
      </div>
    </div>
  )
}

export default Users