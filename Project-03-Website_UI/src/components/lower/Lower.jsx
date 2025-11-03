import React from 'react'
import { Top } from './top'
import Gallery from './Gallery'

export default function Lower() {
  return (
    <div className='absolute bg-amber-900 h-screen w-full'>
      <Top/>
      <Gallery/>
    </div>
  )
}
