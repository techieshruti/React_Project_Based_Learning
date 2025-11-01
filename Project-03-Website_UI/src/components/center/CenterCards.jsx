import React from 'react'
import { Card } from './Card'

export const CenterCards = (props) => {
  return (
    // card container
    <div className='flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 pb-8'>
      {/* card 1 */}
      {props.CardData.map((elem)=> {
        return <Card key={elem.title} img={elem.img} title={elem.title} intro={elem.intro}/>
      })}
    </div>
  )
}
