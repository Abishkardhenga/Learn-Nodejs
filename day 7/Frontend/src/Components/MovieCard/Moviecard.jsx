import React from "react";
import "./Moviecard.css";

const Moviecard = ({ item }) => {
  return (
    <div className="moviecardContainer">
      <img src={item.picture} alt="movieImg" />
      <p>Movie NAME : {item.name} </p>
      <p>desc: {item.desc}</p>
    </div>
  );
};

export default Moviecard;
