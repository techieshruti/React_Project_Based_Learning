import { useState } from 'react'
import { Upper } from './components/upper/Upper'
import { Center } from './components/center/Center'

import bread from './assets/bread.jpg'
import cake from './assets/cake.jpg'
import croissant from './assets/croissant.jpg'
import Lower from './components/lower/Lower'


function App() {
  const CardData=[
    {
      img:bread,
      title:'Artisan Bread',
      intro:'A handcrafted, high-quality bread made with traditional methods and simple, natural ingredients'
    },
    {
      img:cake,
      title:'Custom Cakes',
      intro:'Personalized, handcrafted creations designed specifically for a unique event or individual'
    },
    {
      img:croissant,
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
