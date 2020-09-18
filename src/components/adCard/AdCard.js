import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import imageAd from "../../assets/ad.png";
import imageAdTwo from "../../assets/ad2.png";
import "./styles.scss";

export const AdCard = () => {
  return (
    <div className="adContainer">
      <div className="adContainer--image">
        <img width="100%" src={imageAd} />
      </div>
      <div className="adContainer--right">
        <div className="adContainer--right__img">
          <img width="100%" src={imageAdTwo} />
        </div>
        <div className="adContainer--right__action">
          <p>Book</p>
          <CgArrowLongRight />
        </div>
      </div>
    </div>
  );
};
