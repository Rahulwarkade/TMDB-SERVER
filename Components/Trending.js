import React from "react";
import style from "./Trending.module.css";
import './buttons.css'
const Trending = (props) => {
  const { movies, title,buttons} = props;
  var index = 0;
  return (
    <>
      <div id={style.trending}>
        <div id={style.trendingNav}>
          <h3>{title}</h3>
          <div id={style.today}>
            {buttons.length!=0 && buttons.map((item,idx)=>{ 
              index = index+1;
              var id = "bt"+index;
            return (<button id={id} key={idx} className={style.btn}>{item}</button>)
            })}
          </div>
        </div>
        <div id={style.cardsSections}>
          {movies.map((movie) => {
            return (
              <div key = {movie.id} className={style.card}>
                <div className={style.cardImg}>
                {movie.poster_path?(                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                  />):(                  <img
                    src={`https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg`}
                    alt=""
                  />)}
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
