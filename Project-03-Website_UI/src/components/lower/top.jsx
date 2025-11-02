import React from 'react'
import Button from '../upper/Button.jsx'

export const Top = () => {
  return (
    <div className='relative bg-[#f7ebca] w-full h-1/2'>
        <section className='relative flex justify-center items-center gap-4 h-full'>
        {/* left div */}
            <div className='bg-[#f5e2ae] w-1/3 h-75 px-6 py-4 rounded-2xl '>
              <h1 className='font-bold text-4xl italic py-2 '>Visit Us Today</h1>
              <h3 className='font-semibold text-shadow-md text-lg text-[#a36033] tracking-wider'>Taste the Difference in every bite</h3>
              <p className='pt-2'>Step into our cozy bakery and let the aroma of freshley baked goods welcome you. <br/> we invite to explore our daily selectoins, enjoy a warm cup of coffee, and find your new favoriye treat. We can't wait to sare our love of baking with you.</p>
              <div className='py-4'>
                <Button/>
              </div>
            </div>
            {/* right div */}
            <div className='bg-blue-200 w-1/3 h-full'>right</div>
        </section>
    </div>
  )
}
