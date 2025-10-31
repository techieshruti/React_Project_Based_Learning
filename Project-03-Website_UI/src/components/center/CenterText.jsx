import React from 'react'
import { HandPlatter } from 'lucide-react';

export const CenterText = () => {
  return (
    <div className='flex flex-col items-center justify-center px-40 py-10'>
        {/* icon */}
        <HandPlatter className='w-20 h-20 text-[#a36033] drop-shadow-xl'/>
        {/* heading */}
        <h1 className='text-3xl font-bold tracking-wide py-2'>Why Choose Us?</h1>
        {/* paragraph */}
        <p className='py-2 text-lg'>Our bakery is a place where tradition meets taste. We use only the freshest ingredients to bake a wide variety of delicious breads and sweet pastries every day. Choose us for quality, flavor, and a genuine love for baking that you can taste in every single bite.</p>
    </div>
  )
}
