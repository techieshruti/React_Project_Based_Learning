import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='container'>
        <div className='top'>
          <div className='top-btn'>
            <button>available</button>
            <h3>$55/h</h3>
          </div>
        </div>
        <div className='center'>
          <img src=''/>
          <h1>Wade Wilson</h1>
          <h4>UI/UX Designer</h4>
          <div className='center-info'>
            <i></i>
          <p>Epic Coder</p>
          </div>
          <div className='center-btn'>
            <button>UI</button>
            <button>UX</button>            
            <button>Photoshop</button>
            <button>+4</button>            
          </div>
        </div>
        <div className='bottom'></div>
      </div>
    </div>
  )
}

export default Card