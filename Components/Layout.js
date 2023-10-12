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
            <input type="radio" id="every" checked/>
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
            <h6> Availibilities </h6>
            <span>            <input type="checkbox" id="avil" checked/>
            <label for="avail" style={{paddingLeft : "7px"}}>Search all availabilities?</label></span>
          </div>
          <div className={style.juliet}>
          <h6> Release Dates </h6>
            <span>
            <label for="inp" style={{paddingRight : "7px"}}>from</label>
              <input type="text" id="inp" />
            </span>
            <span><label for="input" style={{paddingRight : "24px"}}>to</label>
            <input type="text" name="to" id="input"/></span>  
          </div>
          <div className={style.kilo}>
            <h6>Geners</h6>
            <button>Action</button>
            <button>Adventure</button>
            <button>Animation</button>
            <button>Comedy</button>
            <button>Crime</button>
            <button>Documentary</button>
            <button>Drama</button>
            <button>Family</button>
            <button>Fantasy</button>
            <button>History</button>
            <button>Horror</button>
            <button>Music</button>
            <button>Mystery</button>
            <button>Romance</button>
            <button>TV Movie</button>
            <button>Thriller</button>
            <button>War</button>
            <button>Western</button>
          </div>
          <div className={style.lema}> 
            <h6>Certification</h6>
            <button> U </button>
            <button> UA </button>
            <button> A </button>
          </div>
          <div className={style.mumbai}> 
            <h6>language?</h6>
            <select  className="form-control">
            <option value="Hinglish"> Hinglish</option>
            <option value="Hinglish">Greek</option>
            <option value="Hinglish">Latin</option>
            <option value="Hinglish">English</option>
            </select>
          </div>
          <div className={style.november}>
            <h6>User Score</h6>
            <span>
            <label for='ra' >Score from 0 to 10 :</label>
            <br></br>
            <input type='range' min='-10' max="0"/>
            </span>
          </div>
          <div className={style.Oscar}>
          <h6>User Score</h6>
            <span>
            <label for='ran' >Score from 0 to 10 :</label>
            <br></br>
            <input id='ran' type='range' min='-10' max="0"/>
            </span>
          </div>
          <div className={style.papa}>
          <h6>User Score</h6>
            <span>
            <label for='ran' >Score from 0 to 10 :</label>
            <br></br>
            <input id='ran' type='range' min='-10' max="0"/>
            </span>
          </div>
          </div>
          <div className={style.gama}>
            <h6>Search</h6>
          </div>
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
