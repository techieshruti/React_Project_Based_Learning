import React from 'react'
import Button from '../upper/Button.jsx'

export const Card = (props) => {
  return (
    <div>
        <div className='w-64 sm:w-72 md:w-64 lg:w-72 xl:w-75 bg-[#fcefcb] flex flex-col rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 items-center'>
        <div className='h-36 md:h-44 sm:h-40 w-full'>
            <img className='h-full w-full object-cover' src={props.img}/>
        </div>
        <h1 className='text-lg sm:text-xl md:text-2xl font-bold pt-4'>{props.title}</h1>
        <p className='px-4 lg:px-2 sm:px-6 py-2 text-xs sm:text-sm md:text-base text-center'>{props.intro}</p>
        <div className='pb-4'>
          <Button />
        </div>
      </div>
    </div>
  )
}
