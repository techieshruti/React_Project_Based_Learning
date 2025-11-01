import React from 'react'
import { CenterText } from './CenterText'
import { CenterCards } from './CenterCards'
import Image from '../../assets/cafe-image.jpg'
// bg-[#f7ebca]
export const Center = (props) => {
  return (
    <div className='h-scrren w-full flex flex-col min-h-screen'>
    {/* Left Image Section */}
  <div
    className="w-[30%] h-full bg-cover bg-center"
    style={{
      backgroundImage: "url(`https://images.unsplash.com/photo-1696635003475-cb0498daca93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387`)",
    }}
  ></div>

  {/* Right Gradient Section */}
  <div
    className="w-[70%] h-full"
    style={{
      background: "linear-gradient(to right, #fff7e6, #fdf4dc, #fbeec2)", // adjust shades
    }}
  ></div>
        <CenterText/>
        <CenterCards CardData={props.CardData}/>
    </div>
  )
}
