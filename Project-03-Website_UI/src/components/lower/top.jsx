import React from 'react'

export const Top = () => {
  return (
    <div className='relative bg-green-300 w-full h-1/2'>
        <section className='relative flex justify-center items-center gap-4 h-full'>
        {/* left div */}
            <div className='bg-red-200 w-1/3 h-full'>
              <h1>Visit Us Today</h1>
              <h3></h3>
              <p></p>
              <Button/>
            </div>
            {/* right div */}
            <div className='bg-blue-200 w-1/3 h-full'>right</div>
        </section>
    </div>
  )
}
