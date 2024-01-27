import { dancingScript } from "@/utils/font";
import React from "react";

const FilterItem = () => {
  return (
    <>
      <div
        className={`text-white bg-[red] px-5 py-[2px] rounded hover:bg-[gray] 
        hover:scale-[0.98] transition-all text-base ${dancingScript.className}`}
      >
        Classic
      </div>
    </>
  );
};

export default FilterItem;
