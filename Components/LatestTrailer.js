import React, { useEffect, useState } from 'react'
import style from './LatestTrailer.module.css';
import axios from "@/utils/api.js";
const LatestTrailer = () => {
  const [trailers, setTrailers] = useState([]);

  const getTrailer = async ()=>{
    const page = Math.floor(Math.random() * 50);
    try {
      const { data } = await axios.get(
        `?api_key=93cd5e2bd792a118f6ae7747817a3e39&page=${page}`
      );
      setTrailers(data?.results);
    } catch (error) {
      console.log(error);
      console.log("not found");
    }
  }
  
  useEffect(() => {
    getTrailer();
  }, [])
  return (
    <>
      <div className={style.container}>
        <img src='https://i.pinimg.com/originals/ef/ec/a4/efeca473ffcdf5a522bdda88baded6fc.jpg' alt="loading" />
        <div className={style.overlay}>
          <div className={style.nav}>
            <h2>Latest Trailers </h2>
            <div className={style.nav2}>
              <button id={style.btn1}>Popular</button>
              <button>On TV</button>
              <button>For Rent</button>
              <button>In Theaters</button>
            </div>
          </div>
          <div className={style.trailer}>
            {trailers?.length!=0 && trailers.map((trailer)=>{
                        return ( <div key = {trailer.id} className={style.card}>
                          <div className={style.cardImg}>
                            {trailer.poster_path ? (<img src={`https://image.tmdb.org/t/p/w500/${trailer.poster_path}`} alt="" />):(<img src="https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg" alt="" />)}
                          </div>
                          <div className={style.details}>
                            <h3>{trailer.title}</h3>
                            <h6> Delicate Part 1 - Finale Trailer </h6>
                          </div>
                        </div>)
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestTrailer