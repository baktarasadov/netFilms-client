import Image from "next/image";
import React from "react";
import img from "@/public/ezel.jpg";
import { dancingScript } from "@/utils/font";
const SearchItem = () => {
  return (
    <>
      <div className="flex justify-around mt-2 hover:bg-[red] transition-all">
        <div className="relative w-8 h-8 rounded-full border border-[red] hover:scale-[0.99] transition-all">
          <Image
            layout="fill"
            objectFit="cover"
            fill
            src={img}
            alt=""
            className="rounded-full "
          />
        </div>
        <p className={`tet-base ${dancingScript.className}`}>Ezel .</p>
      </div>
    </>
  );
};

export default SearchItem;
