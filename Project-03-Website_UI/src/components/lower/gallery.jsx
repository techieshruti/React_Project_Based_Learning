import React from 'react'

export default function Gallery() {
  return (
    <div className='w-full h-1/2 relative flex justify-center'>
      <section className='w-2/3 h-80'>
        <div className='object-cover w-full h-full overflow-hidden flex justify-center my-2 gap-2'>
          <img
            src='https://images.unsplash.com/photo-1756137945097-fd3c4d30a97b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387'
            alt='img'
          />
          <img
            src='https://images.unsplash.com/photo-1753796921649-cfaddf5a52ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464'
            alt='img'
          />
          <img
            src='https://images.unsplash.com/photo-1693028846882-2db3b5233572?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=429'
            alt='img'
          />
          <img
            src='https://images.unsplash.com/photo-1762032313029-7d799c618eae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435'
            alt='img'
          />
          <img
            src='https://images.unsplash.com/photo-1620052087057-bfd8235f5874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1528'
            alt='img'
          />
          
        </div>
      </section>
    </div>
  )
}
