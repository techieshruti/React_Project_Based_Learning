import React from 'react'
import Image from '../../assets/bg_image.png'

export default function HeroSection() {
  return (
    <div className='h-full w-full relative'>
            <img className='object-cover h-screen w-screen' src={Image}/>
        
            <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-gray-300 flex flex-col items-center w-sm rounded-4xl px-6 py-4'>
            <h4 className='font-light tracking-wider'>Crafter Confections, Baked to Perfection</h4>
            <h2 className='font-bold text-3xl'>Freshly Baked, <br/> Just for You!</h2>
            <p>Discover the art pf baking with our modrn and fresh creations. We've refined classic recipes and added a contemporary twist to create a unique and delightful experience. Every pastry and cake is an edible masterpiece, maticulously crafter to elevate your senses and satisfy your cravings.</p>
            <button>Order Now</button>
        </div>

    </div>
  )
}
