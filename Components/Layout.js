"use client"
import React, { useContext, useState } from "react";
import style from "./Layout.module.css";
import {User} from "@/UserContext/UserContext.js"
import ReactHtmlParser from 'react-html-parser';

const Layout = () => {
  const [movies,setMovies] = useContext(User)
  const [popular,setPopular] = useState([]);
  var cluter = ``;
  let idx = 0;
  
  if(movies.length!==0)
  {
    for(let i =0; i<1 && idx<20; i++)
    {
      cluter += `<div id={style.cardsSections}>`
      for(let j=0; j<5 && idx<20; j++)
      {
        const {poster_path,title,release_date} = movies[idx];
        cluter +=  `<div className={style.card}>
        <div className={style.cardImg}>
          <img
            src=${`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
          />
          <div className={style.likes}></div>
        </div>
        <div className={style.details}>
          <h5>${title}</h5>
          <p>${release_date}</p>
        </div>
      </div>`;
      idx = idx+1;
      }
      cluter +=  `</div>`
    }
  }
  console.log(cluter)
  return (
    <>
      <div className={style.topNav}>
        <h1>Popular Movies </h1>
      </div>
      <div className={style.layout}>
        <div className={style.left}></div>
        <div className={style.right}>
        {  }
        </div>
      </div>
    </>
  );
};

export default Layout;
