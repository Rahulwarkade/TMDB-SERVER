"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import axios from "@/utils/api.js";
const page = () => {
  const [movies, setMovies] = useState([]);
  const [bg, setBg] = useState();
  const [flag,setFlag] = useState(0)
  let bgcolor;
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
    if(flag){
      bgcolor = {
        background : "linear-gradient(to right,#174d79,#032541)",
      }
    }
    else {
      bgcolor = {
        background : "linear-gradient(to right,white,white)",
      }
    }
  }, [flag]);

  return (
    <>
      <div id="main">
        <div id="overlay">
          <div id="pageOne">
            <div id="nav">
              <div id="navl">
                <div id="logo">
                  <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="tmdb-logo"
                  />
                </div>
                <Link className="link" href="#">
                  Movies
                </Link>
                <Link className="link" href="#">
                  TV Shows
                </Link>
                <Link className="link" href="#">
                  People
                </Link>
                <Link className="link" href="#">
                  More
                </Link>
              </div>
              <div id="navr">
                <i class="ri-add-fill"></i>
                <i class="ri-english-input"></i>
                <i class="ri-notification-4-fill"></i>
                <div id="pic">
                  <img
                    src="https://images.unsplash.com/photo-1581704906775-891dd5207444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt=""
                  />
                </div>
                <i class="ri-search-line"></i>
              </div>
            </div>
            <div id="welcome">
              <img src={`https://image.tmdb.org/t/p/w500/${bg}`} alt="" />
              <div id="bc-overlay">
                <div id="wraper">
                  <h1>Welcome.</h1>
                  <h3>
                    Millions of movies, TV shows and people to discover. Explore
                    now.
                  </h3>
                  <div id="search">
                    <input
                      type="text"
                      placeholder="Search for a movie, tv show, person......"
                    />

                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="trending">
              <div id="trending-nav">
                <h3>Trending</h3>
                <div id="today">
                  <button onClick={()=>setFlag(flag+1)} id="bt-1" style = {bgcolor}>Today</button>
                  <button onClick={()=>setFlag(flag-1)} id="bt-2" style = {bgcolor}>This Week</button>
                </div>
              </div>
              <div id="cards-sections">
                {movies.map((movie) => {
                  return (
                    <div className="card">
                      <div className="card-img">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt=""
                        />
                        <div className="likes"></div>
                      </div>
                      <div className="details">
                        <h5>{movie.title}</h5>
                        <p>{movie.release_date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
