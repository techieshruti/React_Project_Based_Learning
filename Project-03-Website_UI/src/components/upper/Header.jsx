import React from 'react'
import { ChefHat } from 'lucide-react';

export default function Header() {
  return (
    <div className='bg-[#f7ebcb] flex justify-around items-center px-12 py-3 '>
        <div className='flex flex-col items-center font-bold text-2xl cursor-pointer'>
        <ChefHat />
        <h2>BAKERY</h2>
        </div>
        <ul className='flex justify-around gap-x-8 font-medium text-lg cursor-pointer'>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
        <button className='bg-[#a36033] px-5 py-2 rounded-3xl text-amber-50 font-medium cursor-pointer shadow-lg shadow-[#e0a984]'>Order Now</button>
    </div>
  )
}
