import React from "react";
import { Card } from "./Card";

export const CenterCards = ({ CardData }) => {
  return (
    <div
      className="
        flex flex-wrap md:flex-nowrap
        justify-center 
        gap-4 sm:gap-6 md:gap-8 lg:gap-10 
        px-4 sm:px-6 md:px-10 
        py-6 md:py-6 
        w-full max-w-7xl mx-auto overflow-hidden
      "
    >
      {CardData.map((elem) => (
        <Card
          key={elem.title}
          img={elem.img}
          title={elem.title}
          intro={elem.intro}
        />
      ))}
    </div>
  );
};
