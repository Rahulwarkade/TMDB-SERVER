import React, { useEffect, useState } from 'react';
import Trending from "./Trending.js";
import axios from "@/utils/api.js";
const Free = () => {
    const [Free, setFree] = useState([]);
    const buttons = ["Movies","TV"];

    const getFree = async ()=>{
      const page = Math.floor(Math.random() * 50);
      try {
        const { data } = await axios.get(
          `?api_key=93cd5e2bd792a118f6ae7747817a3e39&page=${page}`
        );
        setFree(data?.results);
      } catch (error) {
        console.log(error);
        console.log("not found");
      }
    }
    
    useEffect(() => {
      getFree();
    }, [])
  return (
    <>
    <Trending movies={Free} title={"Watch Free"} buttons={buttons}/>
    </>
  )
}

export default Free