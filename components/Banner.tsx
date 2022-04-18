import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineInformationCircle, HiPlay } from "react-icons/hi";
import { baseUrl } from "../constants/movie";
import { Movie } from "../types";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  console.log(movie);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-lg md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        Release Date: {(movie?.release_date) || movie?.first_air_date}
      </p>

      <div className="flex gap-2">
        <button className="bannerButton bg-red-600">
          <HiPlay className="h-6 w-6 text-black" /> Play
        </button>

        <button className="bannerButton bg-blue-600/70">
          More info
          <HiOutlineInformationCircle className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
