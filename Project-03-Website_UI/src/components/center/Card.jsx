import React from 'react'
import Image from '../../assets/bread.jpg'
import {Button} from '../upper/Button.jsx'

export const Card = () => {
  return (
    <div>
        <div className='bg-blue-200 w-80 flex flex-col items-center'>
        <div className='h-40 w-full'>
            <img className='h-full w-full object-cover' src={Image}/>
        </div>
        <h1 className='text-3xl font-bold pt-4'>Bread</h1>
        <p className='px-10 py-4 mb-2'>ingredients to bake a wide variety of delicious breads and sweet pastries</p>
        <p>ffff</p>
        <Button/>
      </div>
    </div>
  )
}
