import React from 'react'

export const Top = () => {
  return (
    <div className='relative bg-green-300 w-full h-1/2'>
        <section className='relative flex justify-center items-center gap-4 h-full'>
        {/* left div */}
            <div className='bg-red-200 w-1/3 h-full'>
              <h1>Visit Us Today</h1>
              <h3>Taste the Difference in every bite</h3>
              <p>Step into our cozy bakery and let the aroma of freshley baked goods welcome you. From our signature Artisian breads to our dceedants pastries and custum cakes, every item is crafted with finest ingredients and a passion for baking. we invite to explore our daily selectoins, enjoy a warm cup of coffee, and find your new favoriye treat. We can't wait to sare our love of baking with you.</p>
              <Button/>
            </div>
            {/* right div */}
            <div className='bg-blue-200 w-1/3 h-full'>right</div>
        </section>
    </div>
  )
}
