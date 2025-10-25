import React from 'react'

const Users = ({ name, designation, pay, image, availability, shortIntro, keySkills }) => {
  return (
    <div className='container'>
        <div className='card-container'>
      <div className='top'>
        <div className='top-btn'>
          <button>{availability === 'available' ? 'Available' : 'Offline'}</button>
          <h3>{pay}</h3>
        </div>
      </div>
      <div className='center'>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h4>{designation}</h4>
        <div className='center-info'>
          <p>{shortIntro}</p>
        </div>
        <div className='center-btn'>
          {keySkills && keySkills.slice(0,3).map((skill, idx) => (
            <button key={idx}>{skill}</button>
          ))}
          {keySkills && keySkills.length > 3 && <button>+{keySkills.length - 3}</button>}
        </div>
        <p>{shortIntro}</p>
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