import React from 'react'
import Image from '../../assets/bread.jpg'
import Button from '../upper/Button.jsx'

export const Card = (props) => {
  return (
    <div>
        <div className='w-72 sm:w-80 md:w-85 bg-[#fcefcb] flex flex-col rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 items-center'>
        <div className='h-36 sm:h-40 w-full'>
            <img className='h-full w-full object-cover' src={props.img}/>
        </div>
        <h1 className='text-lg sm:text-xl md:text-2xl font-bold pt-4'>{props.title}</h1>
        <p className='px-4 sm:px-6 md:px-10 py-2 text-xs sm:text-sm md:text-base text-center'>{props.intro}</p>
        <div className='pb-4'>
          <Button />
        </div>
      </div>
    </div>
  )
}
