import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieProfile.css";

const MovieProfile = () => {
  const [MovieInfo, setMovieInfo] = useState();
  const { id } = useParams();
  let api = `http://localhost:8000/movie/${id}`;

  useEffect(() => {
    FetchMovieInfo();
  }, []);

  let FetchMovieInfo = async () => {
    let resposne = await axios.get(api);
    let data = resposne.data.movie;
    setMovieInfo(data);
    // console.log("this is mvp res", resposne.data.movie);
  };

  return (
    <div className="movieProfileContainer">
      <div className="imgWrapper">
        <img src={MovieInfo?.picture} className="movieProfileImg" alt="movie" />
      </div>
      <div></div>
    </div>
  );
};

export default MovieProfile;
