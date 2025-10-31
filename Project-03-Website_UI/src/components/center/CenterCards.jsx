import React from 'react'
import { Card } from './Card'

export const CenterCards = () => {
  return (
    // card container
    <div className='h-screen flex justify-center gap-10'>
      {/* card 1 */}
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
