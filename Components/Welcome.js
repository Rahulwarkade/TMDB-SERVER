import React from "react";
import style from "./Welcome.module.css";
const Welcome = (props) => {
  const { bg } = props;
  return (
    <>
      <div id={style.welcome}>
        <img src={`https://image.tmdb.org/t/p/w500/${bg}`} alt="" />
        <div id={style.bgoverlay}>
          <div id={style.wraper}>
            <h1>Welcome.</h1>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
            <div id={style.search}>
              <input
                type="text"
                placeholder="Search for a movie, tv show, person......"
              />

              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
