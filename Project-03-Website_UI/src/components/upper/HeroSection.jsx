import React from "react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="h-screen w-full relative">
      {/*background image */}
      <img
        className="object-cover w-full h-full"
        src="/images/bg_image.png"
        alt="Hero background"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 sm:px-8">
        <div className="text-center bg-[#f5efe6]/30 text-[#f5f5d6] rounded-3xl p-6 sm:p-8 max-w-lg md:max-w-lg mx-4">
        <h4 className="font-light tracking-widest mb-2 text-sm sm:text-base">
          Crafter Confections, Baked to Perfection
        </h4>
        <h2 className="font-bold text-2xl sm:text-4xl mb-3 text-[#dba87b]">
          Freshly Baked, <br className="hidden sm:block" /> Just for You!
        </h2>
        <p className="mb-4 text-sm sm:text-base leading-relaxed">
          Discover the art of baking with our modern and fresh creations. We've
          refined classic recipes and added a contemporary twist to create a
          unique and delightful experience.
        </p>
        <Button />
      </div>
      </div>
    </section>
  );
}
