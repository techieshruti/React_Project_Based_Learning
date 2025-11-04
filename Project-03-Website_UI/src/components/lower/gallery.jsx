import React from 'react'

export default function Gallery() {
  return (
    <div className='w-full h-1/2 relative flex items-center justify-center bg-linear-to-t from-[#f7c99e] to-white'>
      <section className='w-full h-75 lg:h-65'>
        <div className='object-cover w-full h-full overflow-hidden flex justify-center my-4 gap-3'>
          <img
            src='https://images.unsplash.com/photo-1600383708782-42a91f5ac449?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387'
            alt='img'
            loading="lazy"
          />
          <img
            src='https://images.unsplash.com/photo-1762032313029-7d799c618eae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435'
            alt='img'
            loading="lazy"
          />
          <img
            src='https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435'
            alt='img'
          />
          <img
            src='https://plus.unsplash.com/premium_photo-1670895802184-176bbb53a2f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387'
            alt='img'
          />
          <img
            src='https://images.unsplash.com/photo-1620052087057-bfd8235f5874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1528'
            alt='img'
            loading="lazy"
          />
          
        </div>
      </section>
    </div>
  )
}
