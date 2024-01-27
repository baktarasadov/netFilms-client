import { dancingScript } from "@/utils/font";
import React from "react";
import MovieItem from "../movieItem";

const MovieList = () => {
  return (
    <>
      <div>
        <h2
          className={`text-white border-b w-20 border-[red] pb-1 font-bold text-2xl ${dancingScript.className}`}
        >
          Movies
        </h2>
        <div className="flex gap-6 mt-4 flex-wrap ">
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem /> <MovieItem />
          <MovieItem />
          <MovieItem /> <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>
      </div>
    </>
  );
};

export default MovieList;
