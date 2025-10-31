import React from 'react'
import { Card } from './Card'

export const CenterCards = () => {
  return (
    // card container
    <div className='bg-amber-800 h-screen flex justify-center gap-10'>
      {/* card 1 */}
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
