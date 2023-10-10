"use client";
import React, { useContext, useState, useEffect } from "react";
import style from "./Layout.module.css";
import { User } from "@/UserContext/UserContext.js";
import dayjs from "dayjs";
import axios from "@/utils/api.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "./Footer.js"
import 'remixicon/fonts/remixicon.css'
const Layout = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [more,setMore] = useState(true);
  const [value,setValue] = useState(1.2);
  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        `?api_key=93cd5e2bd792a118f6ae7747817a3e39&page=${page}`
      );
      setMovies([...movies, ...data.results]);
      setPage(page + 1);
      if(page>111) setMore(false);
    } catch (error) {
      console.log(error);
      console.log("not found");
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  const click = ()=>{
    console.log("clicked!!!");
    setValue(0.8);
    getMovies();
  }
  return (
    <>
      <div className={style.topNav}>
        <h1>Popular Movies </h1>
      </div>
      <div className={style.layout}>
        <div className={style.left}>
          <div className={style.alpha}>
            <h5>Sort </h5>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className={style.beta}>
            <h5>Where to watch </h5>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className={style.delta}>
          <div className={style.u}>
            <h5>filters </h5>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <div className = {style.hotel}>
            <h6>show me</h6>
            <li>           
            <input type="radio" id="every" />
            <label for="every">Everything</label>
            </li>
            <li>           
            <input type="radio" id="seen" />
            <label for="seen">Movies I Have Seen</label>
            </li>
            <li>           
            <input type="radio" id="notSeen" />
            <label for="notSeen">Movies I Haven't Seen</label>
            </li>

          </div>
          <div className={style.india}>

          </div>
          </div>
          <div className={style.gama}></div>
        </div>
          <InfiniteScroll
            dataLength={movies.length}
            next={getMovies}
            loader = {(value===0.8)?<h4 style={{ textAlign: "center" }}> Movies are loading... </h4>:""}
            hasMore={more}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            scrollThreshold={value}
          >
        <div className={style.right}>
            {movies?.length !== 0 && (
              movies?.map((movie) => {
                return (
                  <div key={movie.id} className={style.card}>
                    <div className={style.cardImg}>
                      {movie.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt=""
                        />
                      ) : (
                        <img
                          src={`https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg`}
                          alt=""
                        />
                      )}
                      <div className={style.likes}></div>
                    </div>
                    <div className={style.details}>
                      <h5>{movie?.title}</h5>
                      <p>{dayjs(movie?.release_date).format("MMM,D YYYY")}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          </InfiniteScroll>
      </div>
      <button className={style.button} onClick={click} type="button">load more</button>
      <Footer/>
    </>
  );
};

export default Layout;
