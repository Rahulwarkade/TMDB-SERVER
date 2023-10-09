"use client"
import React, {useState,useEffect, createContext} from 'react'
import axios from '@/utils/api.js'

export const User = createContext(null);
const UserContext = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [bg, setBg] = useState();
    const getMovies = async () => {
      const page = Math.floor(Math.random() * 50);
      try {
        const { data } = await axios.get(
          `?api_key=93cd5e2bd792a118f6ae7747817a3e39&page=${page}`
        );
        setMovies(data.results);
  
        const obj = JSON.stringify(data.results[17]);
        const { backdrop_path } = JSON.parse(obj);
        setBg(backdrop_path);
      } catch (error) {
        console.log(error);
        console.log("not found");
      }
    };
    useEffect(() => {
      getMovies();
    }, []);
  return (
    <>
    <User.Provider value={[movies, setMovies]}>
        {children}
    </User.Provider>
    </>
  )
}

export default UserContext