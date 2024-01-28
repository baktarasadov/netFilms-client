import React from "react";
import ezel from "@/public/ezel.jpg";
import Image from "next/image";
const MovieItem = () => {
  return (
    <>
      <div className=" bg-[red] hover:scale-[0.98] transition-all rounded-t rounded-b-lg relative group">
        <div className="relative w-[180px] h-[270px] rounded  border border-[red] hover:scale-[0.98] transition-all box-shadow-movie">
          <Image
            layout="fill"
            objectFit="cover"
            fill
            src={ezel}
            alt=""
            className="rounded"
          />
        </div>
        <div className="text-[red]">
          <span>title</span>
        </div>
        <div className="absolute top-0 bg-[gray] w-full h-full opacity-0 group-hover:opacity-[0.1]"></div>
      </div>
    </>
  );
};

export default MovieItem;
