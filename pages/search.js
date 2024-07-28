import React from "react";
import MovieCard from "@/components/MovieCard";

const Search = ({ movies }) => {

  const searchMovies = movies.slice(0, 6);

  return (
    <div className="md:h-[83vh] w-[90%] mx-auto p-[2vh]">
      <h1 className="text-[3vh] lg:text-[4.5vh] my-[2vh] lg:my-[4vh] text-center font-semibold">
        Search Results
      </h1>
      <div className="flex flex-row gap-y-[2vh] flex-wrap justify-between">
        {searchMovies.length > 0 ? (
          searchMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))
        ) : (
          <h1 className="text-[3vh] lg:text-[4.5vh] text-center w-full">No movies found</h1>
        )}
      </div>
    </div>
  );
};

export default Search;

export async function getServerSideProps( context ) {
    
  const query = context.query.query || "";
  const res = await fetch(
    `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=6aa840bd`
  );

  const data = await res.json();

  return {
    props: {
      movies: data.Search || [],
    },
  };

}
