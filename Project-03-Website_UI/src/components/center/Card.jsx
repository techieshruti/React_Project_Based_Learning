import React from 'react'

export const Card = () => {
  return (
    <div>
        <div className='bg-blue-200 w-80 flex flex-col items-center'>
        <div className='h-40'>
            <img className='' src='https://images.unsplash.com/photo-1649019937955-9687640aaaab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387'/>
        </div>
        <h1 className='text-3xl font-bold pt-4'>Bread</h1>
        <p className='px-10 py-4 mb-2'>ingredients to bake a wide variety of delicious breads and sweet pastries</p>
      </div>
    </div>
  )
}
