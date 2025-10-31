import React from 'react'
import { CenterText } from './CenterText'
import { CenterCards } from './CenterCards'

export const Center = () => {
  return (
    <div className='bg-[#f7ebca] flex flex-col h-screen'>
        <CenterText/>
        <CenterCards/>
    </div>
  )
}
