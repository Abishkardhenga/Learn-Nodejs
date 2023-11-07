import React, { useEffect, useState } from "react";
import "./App.css";
import Moviecard from "./Components/MovieCard/Moviecard";
import axios from "axios";

const App = () => {
  const [ movieCollection , setMovieCollection ] = useState([])
  let api = "http://localhost:8000/movie";
  useEffect(() => {
    FetchMovie();
  }, []);

  let FetchMovie = async () => {
    let response = await axios.get(api);
    const data = response.data.message
    setMovieCollection(data)
    console.log("this is response", data);
  };
  return (
    <div className="appContainer">
      {
        movieCollection.map((item)=>{
          return  <Moviecard item={item} />
        })
      }
    </div>
  );
};

export default App;
