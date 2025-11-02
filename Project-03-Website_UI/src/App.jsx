import { useState } from 'react'
import { Upper } from './components/upper/Upper'
import { Center } from './components/center/Center'
import Lower from './components/lower/Lower'


function App() {
  const CardData=[
    {
      img:'/images/bread.jpg',
      title:'Artisan Bread',
      intro:'A handcrafted, high-quality bread made with traditional methods and simple, natural ingredients'
    },
    {
      img:'/images/cake.jpg',
      title:'Custom Cakes',
      intro:'Personalized, handcrafted creations designed specifically for a unique event or individual'
    },
    {
      img:'/images/croissant.jpg',
      title:'Buttery Croissant',
      intro:'A versatile, buttery, & flaky loaf made from a laminated yeast dough, offering the rich taste in a bread'
    }
  ];
  return (
   <>
    <Upper />
    <Center CardData={CardData}/>
    <Lower/>
   </>
  )
}

export default App
