import Image from "next/image";
import Head from "next/head";
import MovieCard from "@/components/MovieCard";

export default function Home({movies}) {

  const topMovies = movies.slice(0,6);
  return (
    <div className="h-[83vh] w-[90%] mx-auto p-[2vh]">

      <h1 className="text-[4.5vh] my-[4vh] text-center font-semibold">
        Top Picks for you!!
      </h1>

      <div className="flex flex-row justify-between">
        {topMovies.map((movie)=>(
          <MovieCard movie={movie} key={movie.imdbID}/>
        ))}
      </div>

    </div>
  );
}

export async function getServerSideProps() {

  const res = await fetch(`http://www.omdbapi.com/?s=Avengers&apikey=6aa840bd`);
  const data = await res.json();

  console.log(data.Search);

  return {
    props: {
      movies: data.Search || [],
    },
  };

}
