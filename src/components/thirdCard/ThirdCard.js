import React from "react";
import keanu from "../../assets/keanu.jpg";
import { CgArrowLongRight } from "react-icons/cg";
import "./styles.scss";

export const ThirdCard = () => {
  return (
    <div className="containerThirdCard">
      <div className="containerThirdCard--header">
        <div className="containerThirdCard--header__image">
          <img width="100%" src={keanu} />
        </div>
        <div className="containerThirdCard--header__text">
          <p className="title">Everyone in old Hollywood was on acid</p>
          <p className="date">March 20, 2020</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum dui et mollis mattis. Nulla in ultricies dui. Ut tristique
          mi at sem lacinia maximus.
        </p>
      </div>
      <div className="containerThirdCard--action">
        <p>Read more</p>
        <CgArrowLongRight />
      </div>
    </div>
  );
};
