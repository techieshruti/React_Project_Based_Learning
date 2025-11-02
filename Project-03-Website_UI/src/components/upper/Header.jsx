import React, {useState} from 'react'
import { ChefHat, Menu, X } from 'lucide-react';
import Button from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='bg-[#f7ebca] sticky top-0 z-10 shadow-md'>
    <div className='flex justify-between items-center px-6 py-4'>
    
    {/* logo */}
        <div className='flex flex-col items-center font-bold text-2xl cursor-pointer sm:text-2xl'>
        <ChefHat className='text-[#a36033] drop-shadow-xl w-8 h-8 sm:w-10 sm:h-10'/>
        <h2>THE RUSTIC OVEN</h2>
        </div>

        {/* Desktop Nav */}
        <ul className='hidden md:flex gap-x-8 font-medium text-2xl  cursor-pointer'>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
        
        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button />
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button />
        </div>
    </div>

    {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center bg-[#f7ebca] pb-4 space-y-4 font-medium text-lg md:hidden cursor-pointer">
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      )}
    </header>
  );
}
