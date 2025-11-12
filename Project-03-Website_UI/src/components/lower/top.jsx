import React from 'react'
import Button from '../upper/Button.jsx'

export const Top = () => {
  return (
    <div className='relative bg-linear-to-b from-[#f7c99e] to-white w-full py-10'>
        <section className='relative flex flex-col justify-center items-center lg:flex-row gap-6 px-6 lg:px-20'>
        {/* left div */}
            <div className='bg-linear-to-b from-[#f5e2ae] to-white w-full lg:w-1/3 shadow-md px-6 py-6 rounded-2xl lg:text-left'>
              <h1 className='font-bold text-3xl italic py-2 sm:text-4xl'>Visit Us Today</h1>
              <h3 className='font-semibold text-shadow-md text-lg text-[#a36033] tracking-wider'>Taste the Difference in every bite</h3>
              <p className='pt-3 text-sm sm:text-base leading-relaxed'>Step into our cozy bakery and let the aroma of freshley baked goods welcome you. <br/> we invite to explore our daily selectoins, enjoy a warm cup of coffee, and find your new favoriye treat. We can't wait to sare our love of baking with you.</p>
              <div className='py-4'>
                <Button/>
              </div>
            </div>
            {/* right div */}
            <div className='w-full lg:w-1/3 flex flex-col justify-center gap-4 sm:flex-row lg:flex-row'>
            {/* right div 1 */}
              <div className='w-full sm:w-1/2 h-64 sm:h-72 rounded-xl overflow-hidden shadow-md'>
              <img
              className='object-cover w-full h-full' 
               src='/images/cupcake.jpg'
               alt='cupcake-image'
              />
              </div>
              {/* right div 2 */}
              <div className=' w-full sm:w-1/2 flex flex-col justify-center gap-4'>
              {/* top img div */}
                <div className='h-full w-full overflow-hidden'>
                  <img
              className='object-cover' 
               src='/images/cupcake1.jpg'
               alt='cupcake-image'
              />
                </div>
                {/* bottom img div */}
                <div className='h-full w-full overflow-hidden'>
                  <img
              className='object-cover' 
               src='/images/coffee.jpg'
               alt='cupcake-image'
              />
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}
