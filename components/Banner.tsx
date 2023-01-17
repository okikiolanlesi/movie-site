import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Movie } from "@/typings";
interface Props {
  netflixOriginals?: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    if (netflixOriginals && netflixOriginals.length > 0) {
      const randomIndex = Math.floor(Math.random() * netflixOriginals.length);
      setMovie(netflixOriginals[randomIndex]);
    }
  }, [netflixOriginals]);
  console.log(movie);

  return (
    <div>
      <div>
        <Image alt="Featured Image" src={"/ff"} width={100} height={100} />
      </div>
    </div>
  );
};

export default Banner;
