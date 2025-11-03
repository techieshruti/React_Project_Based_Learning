import React from 'react'

export default function Gallery() {
  return (
    <div className='bg-pink-200 w-full h-1/2 relative flex justify-center'>
      <section className='bg-green-500 w-2/3 h-full '>
        <div className='bg-blue-200 my-2 h-full w-1/4 object-cover overflow-hidden'>
          <img
            className='bg-red-300'
            src='https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682779.jpg?semt=ais_hybrid&w=740&q=80'
            alt='img'
          />
        </div>
      </section>
    </div>
  )
}
