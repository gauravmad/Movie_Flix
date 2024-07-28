import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({movie}) => {

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className="relative w-[47%] lg:w-[15%] shadow-md bg-[#111] text-white hover:scale-105 transition-all duration-300">
      <Link href={`/moviedescription/${movie.imdbID}`} onClick={handleClick}>
        <div>
          <img
            src={movie.Poster}
            className="w-[100%] object-contain"
            alt={movie.Title}
          />
          <div className="p-[1vh]">
            <h1 className="text-[1.5vh] lg:text-[2.4vh] font-bold text-[#f7ca25]">
              {movie.Title.slice(0, 16)}..
            </h1>
            <p className="text-[1.6vh] lg:text-[2.3vh]">{movie.Year}</p>
          </div>
        </div>
      </Link>

      {loading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
