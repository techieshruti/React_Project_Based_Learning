import { useState } from 'react'
import { Upper } from './components/upper/Upper'
import { Center } from './components/center/Center'

import bread from './assets/bread.jpg'
import cake from './assets/cake.jpg'
import croissant from './assets/croissant.jpg'


function App() {
  const CardData=[
    {
      img:bread,
      title:'Artisan Bread',
      intro:'a handcrafted, high-quality bread made with traditional methods and simple, natural ingredients'
    },
    {
      img:cake,
      title:'Custom Cakes',
      intro:'personalized, handcrafted creations designed specifically for a unique event or individual'
    },
    {
      img:croissant,
      title:'Buttery Croissant',
      intro:'a buttery, flaky, crescent-shaped pastry with a delicate, airy interior'
    }
  ];
  return (
   <>
    <Upper />
    <Center CardData={CardData}/>
   </>
  )
}

export default App
