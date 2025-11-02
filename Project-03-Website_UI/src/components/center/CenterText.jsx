import React from "react";
import { HandPlatter } from "lucide-react";

export const CenterText = () => {
  return (
    <div
      className="
    flex
     flex-col
      items-center 
      justify-center 
      px-4 
      sm:px-8
      md:px-10
      text-center 
      py-4
      md:w-full"
    >
      {/* icon */}
      <HandPlatter className="w-12 h-12 sm:w-16 sm:h-16 text-[#a36033] drop-shadow-xl" />
      {/* heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide py-2">
        Why Choose Us?
      </h1>
      {/* paragraph */}
      <p className="text-sm sm:text-base md:text-lg px-2 sm:px-4 leading-relaxed">
        Our bakery is a place where tradition meets taste. We use only the
        freshest ingredients to bake a wide variety of delicious breads and
        sweet pastries every day. Choose us for quality, flavor, and a genuine
        love for baking that you can taste in every single bite.
      </p>
    </div>
  );
};
