import React from 'react'
import { CenterText } from './CenterText'
import { CenterCards } from './CenterCards'
import bread from '../../assets/bread.jpg'
import cake from '../../assets/cake.jpg'
import croissant from '../../assets/croissant.jpg'

export const Center = () => {
  const CardData=[
    {
      img:{bread},
      heading:'Artisan Bread',
      text:'a handcrafted, high-quality bread made with traditional methods and simple, natural ingredients'
    },
    {
      img:{cake},
      heading:'Custom Cakes',
      text:'personalized, handcrafted creations designed specifically for a unique event or individual'
    },
    {
      img:{croissant},
      heading:'Buttery Croissant',
      text:'a buttery, flaky, crescent-shaped pastry with a delicate, airy interior'
    }
  ];
  return (
    <div className='bg-[#f7ebca] flex flex-col h-screen'>
        <CenterText/>
        <CenterCards/>
    </div>
  )
}
