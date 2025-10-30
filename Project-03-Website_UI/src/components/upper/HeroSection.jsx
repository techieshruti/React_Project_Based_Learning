import React from 'react'
import Image from '../../assets/bg_image.png'
import Button from './Button'

export default function HeroSection() {
  return (
    <div className='h-full w-full relative'>
            <img className='object-cover h-screen w-screen' src={Image}/>
        
            <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-[#f5efe6]/20 text-[#f5f5d6]  flex flex-col items-center w-sm rounded-4xl px-6 py-4'>
            <h4 className='font-light tracking-widest py-1'>Crafter Confections, Baked to Perfection</h4>
            <h2 className='font-bold text-3xl py-1.5 text-[#dba87b]'>Freshly Baked, <br/> Just for You!</h2>
            <p className='py-1 mb-1.5'>Discover the art of baking with our modern and fresh creations. We've refined classic recipes and added a contemporary twist to create a unique and delightful experience.</p>
            <Button/>
            </div>

    </div>
  )
}
