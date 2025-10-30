import React from 'react'
import Image from '../../assets/bg_image.png'

export default function HeroSection() {
  return (
    <div className='bg-amber-600 flex justify-center'>
        {/* <img className='object-cover h-screen w-screen' src={Image}/> */}
        <div className='bg-gray-300 flex flex-col items-center w-sm rounded-md px-6 py-4'>
            <h4 className='font-light tracking-wider'>Crafter Confections, Baked to Perfection</h4>
            <h2>Freshly Baked, <br/> Just for You!</h2>
            <p>Discover the art pf baking with our modrn and fresh creations. We've refined classic recipes and added a contemporary twist to create a unique and delightful experience. Every pastry and cake is an edible masterpiece, maticulously crafter to elevate your senses and satisfy your cravings.</p>
            <button>Order Now</button>
        </div>
    </div>
  )
}
