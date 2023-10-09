"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import axios from "@/utils/api.js";
import Navigation from '@/Components/Navigation.js'
import Welcome from '@/Components/Welcome.js'
import Trending from '@/Components/Trending.js'
const page = () => {
  const [movies, setMovies] = useState([]);
  const [bg, setBg] = useState();
  const getMovies = async () => {
    const page = Math.floor(Math.random() * 50);
    try {
      const { data } = await axios.get(
        `?api_key=93cd5e2bd792a118f6ae7747817a3e39&page=${page}`
      );
      // setMovies(data.results);

      const obj = JSON.stringify(data.results[17]);
      const { backdrop_path } = JSON.parse(obj);
      setBg(backdrop_path);
    } catch (error) {
      console.log(error);
      console.log("not found");
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div id="main">
        <div id="overlay">
          <div id="pageOne">
            <Navigation/>
            <Welcome bg={bg}/>
            <Trending movies={movies}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
