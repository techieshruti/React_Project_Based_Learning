import React from 'react'
import Image from '../../assets/bread.jpg'
import Button from '../upper/Button.jsx'

export const Card = (props) => {
  return (
    <div>
        <div className='w-72 bg-[#faf5e6] flex flex-col sm:w-80, md:w-85 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 items-center'>
        <div className='h-50 w-full'>
            <img className='h-full w-full object-cover' src={props.img}/>
        </div>
        <h1 className='text-xl sm:text-2xl font-bold pt-4'>{props.title}</h1>
        <p className='px-6 py-2 text-sm text-center sm:px-10 sm:text-base'>{props.intro}</p>
        <div className='pb-4'>
          <Button />
        </div>
      </div>
    </div>
  )
}
