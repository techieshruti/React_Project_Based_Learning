import React from 'react'
import Image from '../../assets/bread.jpg'
import Button from '../upper/Button.jsx'

export const Card = (props) => {
  return (
    <div>
        <div className='bg-[#faf5e6] w-80 flex flex-col items-center pb-4'>
        <div className='h-40 w-full'>
            <img className='h-full w-full object-cover' src={props.img}/>
        </div>
        <h1 className='text-3xl font-bold pt-4'>{props.title}</h1>
        <p className='px-10 py-2 '>{props.intro}</p>
        <Button />
      </div>
    </div>
  )
}
