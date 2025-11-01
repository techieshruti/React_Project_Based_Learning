import React from "react";
import { CenterText } from "./CenterText";
import { CenterCards } from "./CenterCards";
import Image from "../../assets/cafe-image.jpg";

export const Center = (props) => {
  return (
    <div className="h-screen w-full flex flex-row relative">
      {/* Left Image Section with fade-out effect */}
      <div
        className="w-[30%] h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0) 60%, #fff7e6 100%), url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* slight dark overlay */}
  <div className="absolute inset-0 bg-yellow/15"></div>
      </div>

      {/* Right Gradient Section */}
      <div
        className="w-[70%] h-screen"
        style={{
          background: 'linear-gradient(to right, #fff7e6, #fdf4dc, #fbeec2)',
        }}
      ></div>

      {/* Overlay content */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <CenterText />
        <CenterCards CardData={props.CardData} />
      </div>
    </div>
  );
};
