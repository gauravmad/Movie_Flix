import React from "react";

const moviedesc = ({movie}) => {
  return (
    <div className="lg:h-[94vh] lg:w-[90%] mx-auto p-[2vh]">
      <div className="flex flex-col gap-y-[2vh] lg:flex-row justify-between lg:p-[2vh] my-[2vh] lg:my-[4vh]">
        <img
          src={movie.Poster}
          className="lg:w-[28%] object-contain"
        />
        <div className="p-[1vh] lg:w-[70%] ">
          <h1 className="text-[2.6vh] lg:text-[4vh] font-bold text-[#333333]">{movie.Title}</h1>
          <p className="text-[2.1vh] lg:text-[2.6vh] font-medium text-[#4f4f4f] my-[1vh]">
            {movie.Plot}
          </p>
          <p className="text-[2.1vh] lg:text-[2.9vh] font-semibold text-[#4f4f4f] my-[1vh]">
            Release: {movie.Released}
          </p>

          <p className="font-medium text-[2vh] lg:text-[2.6vh] my-[1vh]">
            Genre:{""} {movie.Genre}
          </p>

          <p className="font-medium text-[2vh] lg:text-[2.6vh] my-[1vh]">
            Languages:{""} {movie.Language}
          </p>

          <p className="font-medium text-[2vh] lg:text-[2.6vh] my-[1vh]">Country:{""} {movie.Country}</p>

          <p className="font-medium text-[2vh] lg:text-[2.6vh] my-[1vh]">
            Awards:{""} {movie.Awards}
          </p>

          <p className="font-medium text-[2vh] lg:text-[3vh] my-[1vh]">
            Actors:{""} {movie.Actors}
          </p>

          <p className="font-medium text-[2vh] lg:text-[3vh] my-[1vh]">
            MetaScore:{""} {movie.Metascore}
          </p>

          <p className="font-medium text-[2vh] lg:text-[3vh] text-yellow-500 my-[1vh]">
            IMDB Rating:{""} *{movie.imdbRating}
          </p>

          <p className="font-medium text-[2vh] lg:text-[3vh] my-[1vh]">
            IMDB Votes:{""} {movie.imdbVotes}
          </p>

          <p className="font-bold text-[#fd5400] text-[2vh] lg:text-[3.5h] my-[1vh]">
            BoxOffice:{""} {movie.BoxOffice}
          </p>

        </div>
      </div>
    </div>
  );
};

export default moviedesc;

export async function getServerSideProps(context) {

    const {id} = context.query;
    const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=6aa840bd`);
    const movie = await res.json();

    return {
        props: {
            movie,
        },
    };
};