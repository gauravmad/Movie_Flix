import React from "react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({movie}) => {
  return (
    <div className="w-[15%] shadow-md bg-[#111] text-white hover:scale-105 transition-all duration-300">
      <Link href={`/moviedescription/${movie.imdbID}`}>
        <div >
          <img
            src={movie.Poster}
            className="w-[100%] object-contain"
          />
          <div className="p-[1vh]">
            <h1 className="text-[2.4vh] font-bold text-[#f7ca25]">
              {movie.Title.slice(0, 16)}..
            </h1>
            <p className="text-[2.3vh]">{movie.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
