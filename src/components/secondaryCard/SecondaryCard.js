import React from "react";
import "./styles.scss";
import actress from "../../assets/actresses.jpg";
import { CgArrowLongRight } from "react-icons/cg";

export const SecondaryCard = () => {
  return (
    <div className="containerSecondCard">
      <div className="containerSecondCard--leftSide">
        <div className="containerSecondCard--leftSide__title">
          <p>The Great Kate</p>
        </div>
        <div className="containerSecondCard--leftSide__body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            elementum dui et mollis mattis. Nulla in ultricies dui. Ut tristique
            mi at sem lacinia maximus.
          </p>
        </div>
        <div className="containerSecondCard--leftSide__action">
          <p>Watch video</p>
          <CgArrowLongRight />
        </div>
      </div>
      <div className="containerSecondCard--rightSide">
        <img width="100%" src={actress} />
      </div>
    </div>
  );
};
