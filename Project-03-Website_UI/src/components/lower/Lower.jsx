import React from 'react'
import { Top } from './top'
import Gallery from './Gallery'

export default function Lower() {
  return (
    <div className='flex flex-col w-full'>
      <Top/>
      <Gallery/>
    </div>
  )
}
