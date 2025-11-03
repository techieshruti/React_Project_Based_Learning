import React from 'react'

export default function Gallery() {
  return (
    <div className='bg-pink-200 w-full h-1/2 relative flex justify-center'>
      <section className='bg-green-500 w-2/3 h-80'>
        <div className='bg-blue-200 object-cover w-full h-full overflow-hidden flex justify-center my-2'>
          <img
            className='bg-red-300 '
            src='https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682779.jpg?semt=ais_hybrid&w=740&q=80'
            alt='img'
          />
          <img
            className='bg-red-300 '
            src='https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682779.jpg?semt=ais_hybrid&w=740&q=80'
            alt='img'
          />
          <img
            className='bg-red-300 '
            src='https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682779.jpg?semt=ais_hybrid&w=740&q=80'
            alt='img'
          />
          <img
            className='bg-red-300 '
            src='https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682779.jpg?semt=ais_hybrid&w=740&q=80'
            alt='img'
          />
          
        </div>
      </section>
    </div>
  )
}
