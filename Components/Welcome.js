import React  from "react";
import {Suspense} from 'react';
import style from "./Welcome.module.css";
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Welcome = (props) => {
  const { bg } = props;
  return (
    <>
      <div id={style.welcome}>
        <Suspense fallback={<h1 className="text-danger text-center">loading</h1>}>
        {bg?(<img src={`https://image.tmdb.org/t/p/w500/${bg}`} alt="" />) : (<img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.themoviedb.org%2Ftalk%2F5dc871d26c0e4f00133b7ec6&psig=AOvVaw1ATO2AA6kKWhsENQixzvU9&ust=1697372676148000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPjW1Y7E9YEDFQAAAAAdAAAAABAD`} alt="" />)}
        </Suspense>
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
