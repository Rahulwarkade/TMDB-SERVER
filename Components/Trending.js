import React from "react";
import style from "./Trending.module.css";
const Trending = (props) => {
  const { movies } = props;
  return (
    <>
      <div id={style.trending}>
        <div id={style.trendingNav}>
          <h3>Trending</h3>
          <div id={style.today}>
            <button className={style.bt1}>Today</button>
            <button className={style.bt2}>This Week</button>
          </div>
        </div>
        <div id={style.cardsSections}>
          {movies.map((movie) => {
            return (
              <div className={style.card}>
                <div className={style.cardImg}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                  />
                  <div className={style.likes}></div>
                </div>
                <div className={style.details}>
                  <h5>{movie.title}</h5>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Trending;
