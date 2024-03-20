"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import player from "@/public/assets/player.jpg";
import CategoryCard from "./(site)/components/category";
import { useRouter } from "next/navigation";

function Home() {
  const [scrolling, setScrolling] = useState(false);
  const route = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };
    // Attach the event listener to the window scroll event
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`relative bg-center bg-cover min-h-screen bg-${
          scrolling ? "gray-800" : "transparent"
        } md:bg-cover md:min-w-fit sm:min-w-fit`}
        style={{
          backgroundImage: `url("https://imgur.com/uKQqsuA.png");`,
        }}
      >
        <div className="absolute bottom-1/3 text-center w-full left-0 md:text-center md:w-full md:left-0 text-white">
          <h1 className="text-6xl font-bold md:text-5xl sm:text-4xl 1sm:text-lg">
            PRODUCTS FOR THE SOUL
          </h1>
          <p className="text-lg font-thin md:text-lg 1sm:text-sm">
            Breath new life into cultural art.
          </p>
          <button onClick={() => route.push("/shop")} className="border-2 border-white px-2 w-60 h-10 1sm:w-26 1sm:h-10 1sm:px-2 1sm:text-sm 1sm:text-center text-white text-center rounded-full hover:bg-white hover:text-black transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      <h1 className="text-6xl text-center font-bold font-mono">Game on...</h1>
      <div className="my-4 grid grid-cols-2 mx-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 1sm:grid 1sm:grid-colss-1">
        <Image src={player} alt="" className="rounded-tl-3xl rounded-br-3xl" />
        <div className="text-balance mt-10 p-2 text-lg top-0 z-10">
          <h6 className="">
            Immerse yourself in a world of epic adventures and unparalleled
            excitement with our vast collection of video games.
          </h6>
          <p>
            Unlock new levels of fun with our curated selection of top-rated and
            critically acclaimed video games.Experience gaming like never before
            with our cutting-edge reviews, previews, and expert opinions on the
            latest titles.
          </p>
          <button onClick={() => route.push("/shop")} className="border-2 top-0 mt-20 border-black float-end px-2 w-52 h-10 1sm:w-26 1sm:h-10 1sm:px-2 1sm:text-sm 1sm:text-center text-black text-center rounded-lg hover:bg-black hover:text-white transition duration-300">
            View All
          </button>
        </div>
      </div>
      <h1 className="text-center text-6xl font-bold font-mono my-2">Shop with us😄</h1>
      <div className="grid grid-cols-3">
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
        <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
      </div>
      <div className="grid grid-cols-2 justify-center">
      <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Accessories"
        />
      </div>
    </>
  );
}

export default Home;
