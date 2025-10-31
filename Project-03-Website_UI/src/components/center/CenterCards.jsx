import React from 'react'
import { Card } from './Card'

export const CenterCards = (props) => {
  return (
    // card container
    <div className='h-screen flex justify-center gap-10 pb-4'>
      {/* card 1 */}
      {props.CardData.map(function (elem) {
        return <Card img={elem.img} title={elem.title} intro={elem.intro}/>
      })}
    </div>
  )
}
