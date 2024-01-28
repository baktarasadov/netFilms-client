import React from "react";
import ezel from "@/public/ezel.jpg";
import Image from "next/image";
const MovieItem = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default MovieItem;
