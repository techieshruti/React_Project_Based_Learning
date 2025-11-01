import React from 'react'
import { CenterText } from './CenterText'
import { CenterCards } from './CenterCards'

export const Center = (props) => {
  return (
    <div className='bg-[#f7ebca] flex flex-col min-h-screen'>
        <CenterText/>
        <CenterCards CardData={props.CardData}/>
    </div>
  )
}
