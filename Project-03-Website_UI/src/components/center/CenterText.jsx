import React from 'react'
import { HandPlatter } from 'lucide-react';

export const CenterText = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 sm:px-20 md:px-40 text-center py-6'>
        {/* icon */}
        <HandPlatter className='w-16 h-16 sm:w-20 sm:h-20 text-[#a36033] drop-shadow-xl'/>
        {/* heading */}
        <h1 className='text-2xl sm:text-3xl font-bold tracking-wide py-2'>Why Choose Us?</h1>
        {/* paragraph */}
        <p className='py-2 text-base sm:text-lg leading-relaxed'>Our bakery is a place where tradition meets taste. We use only the freshest ingredients to bake a wide variety of delicious breads and sweet pastries every day. Choose us for quality, flavor, and a genuine love for baking that you can taste in every single bite.</p>
    </div>
  )
}
