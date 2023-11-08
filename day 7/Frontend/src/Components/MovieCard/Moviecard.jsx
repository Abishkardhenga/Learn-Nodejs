import React from "react";
import "./Moviecard.css";
import { Link, useParams } from "react-router-dom";

const Moviecard = ({ item }) => {
  // const { id } = useParams();
  return (
    <Link to={`/movie/ ${item.id}`} className="moviecardContainer">
      <img src={item.picture} className="movieImg" alt="movieImg" />
      <p>Movie NAME : {item.name} </p>
      <p>desc: {item.desc}</p>
    </Link>
  );
};

export default Moviecard;
