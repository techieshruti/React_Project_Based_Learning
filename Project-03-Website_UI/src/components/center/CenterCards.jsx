import React from "react";
import { Card } from "./Card";

export const CenterCards = ({ CardData }) => {
  return (
    <div
      className="
        flex flex-wrap
        justify-center 
        gap-6 sm:gap-8 md:gap-10
        px-4 sm:px-6 md:px-6 
        py-6 md:py-10 
        w-full max-w-6xl mx-auto
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
