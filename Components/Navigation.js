import React from "react";
import "remixicon/fonts/remixicon.css";
import style from "./Navigation.module.css";
import Link from "next/link";
const Navigation = () => {
  return (
    <>
      <div id={style.nav}>
        <div id={style.navl}>
          <div id={style.logo}>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="tmdb-logo"
            />
          </div>
          <Link className={style.link} id={style.M} href="#">
            Movies
          </Link>
          <div className={style.movies}>
            <div className={style.hover}></div>
            <Link href="/movies/">Popular</Link>
            <Link href="/movies/now-playing">Now Playing</Link>
            <Link href="/movies/upcoming">Upcoming</Link>
            <Link href="/movies/top-rated">Top Rated</Link>
          </div>
          <Link className={style.link} id={style.S} href="#">
            TV Shows
          </Link>
          <div className={style.shows}>
            <div className={style.hover2}></div>
            <Link href="#">Popular</Link>
            <Link href="#">Airing Today</Link>
            <Link href="#">On TV</Link>
            <Link href="#">Top Rated</Link>
          </div>
          <Link className={style.link} id={style.P} href="#">
            People
          </Link>
          <div className={style.people}>
            <div className={style.hover3}></div>
            <Link href="#">Popular People</Link>
          </div>
          <Link className={style.link} id={style.m} href="#">
            More
          </Link>
          <div className={style.more}>
            <div className={style.hover4}></div>
            <Link href="#">Discussions</Link>
            <Link href="#">Leaderboard</Link>
            <Link href="#">Support</Link>
            <Link href="#">API</Link>
          </div>
        </div>
        <div id={style.navr}>
          <i className="ri-add-fill"></i>
          <i className="ri-english-input"></i>
          <i className="ri-notification-4-fill"></i>
          <div id={style.pic}>
            <img
              src="https://images.unsplash.com/photo-1581704906775-891dd5207444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt=""
            />
          </div>
          <i className="ri-search-line"></i>
        </div>
      </div>
    </>
  );
};

export default Navigation;
