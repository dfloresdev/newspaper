import React from "react";
import "./styles.scss";

export const NewsCard = () => {
  return (
    <div className="containerNewsCard">
      <p className="containerNewsCard--title">
        The brand new Hollywood horror movie is here!
      </p>
      <p className="containerNewsCard--date">March 20, 1966</p>
    </div>
  );
};
