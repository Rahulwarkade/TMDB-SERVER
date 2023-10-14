import React, { useEffect, useState } from 'react';
import Trending from "./Trending.js";
import axios from "@/utils/api.js";
const Popular = () => {
    const [populars, setPopulars] = useState([]);
    const buttons = ["Streaming","On TV", "For Rent", "In Theaters"];

    const getPopulars = async ()=>{
      const page = Math.floor(Math.random() * 50);
      try {
        const { data } = await axios.get(
          `?api_key=93cd5e2bd792a118f6ae7747817a3e39&page=${page}`
        );
        setPopulars(data?.results);
      } catch (error) {
        console.log(error);
        console.log("not found");
      }
    }
    
    useEffect(() => {
      getPopulars();
    }, [])
  return (
    <>
    <Trending movies={populars} title={"Popular"} buttons={buttons}/>
    </>
  )
}

export default Popular