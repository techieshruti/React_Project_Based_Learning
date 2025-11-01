import React from "react";
import { CenterText } from "./CenterText";
import { CenterCards } from "./CenterCards";
import Image from "../../assets/cafe-image.jpg";

export const Center = (props) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen relative">
      {/* Left Image Section with fade-out effect */}
      <div
        className="w-full md:w-[40%] min-h-screen md:h-auto bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0) 70%, #fff7e6 100%), url(${Image})`,
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
        className="w-full md:w-[70%] flex flex-col justify-center items-center text-center py-10 md:py-2 h-screen"
        style={{
          background: 'linear-gradient(to right, #fff7e6, #fdf4dc, #fbeec2)',
        }}
      >
        <div className="absolute md:my-6 flex flex-col items-center justify-center text-center">
        <CenterText />
        <CenterCards CardData={props.CardData} />
      </div>
      </div>

      {/* Overlay content */}
      
    </div>
  );
};
