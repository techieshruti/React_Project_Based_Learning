import React from 'react'
import { CenterText } from './CenterText'
import { CenterCards } from './CenterCards'

export const Center = () => {
  return (
    <div className='bg-[#f7ebca] h-screen w-screen'>
        <CenterText/>
        <CenterCards/>
    </div>
  )
}
