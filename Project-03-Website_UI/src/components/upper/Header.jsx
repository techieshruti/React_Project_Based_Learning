import React from 'react'
import { ChefHat } from 'lucide-react';
import Button from './Button';

export default function Header() {
  return (
    <div className='bg-[#f7ebcb] flex justify-around items-center px-12 py-3'>
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
        <Button />
    </div>
  )
}
