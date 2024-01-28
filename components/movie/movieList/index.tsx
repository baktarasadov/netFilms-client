import { dancingScript } from "@/utils/font";
import React from "react";
import MovieItem from "../movieItem";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
const MovieList = () => {
  return (
    <>
      <div>
        <h2
          className={`text-white border-b w-20 border-[red] pb-1 font-bold text-2xl ${dancingScript.className}`}
        >
          Movies
        </h2>
        <div className="flex gap-5 mt-4 flex-wrap">
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
        <div className="flex justify-center gap-2 mt-5">
          <span className="pagination">
            <IoMdArrowRoundBack />
          </span>
          <span className="pagination">
            <IoMdArrowRoundForward />
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieList;
