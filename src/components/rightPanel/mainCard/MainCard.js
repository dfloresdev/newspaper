import React from "react";
import mr from "../../../assets/mr.png";
import "./styles.scss";

export const MainCard = () => {
  return (
    <div className="containerMainCard">
      <div className="containerMainCard--info">
        <p className="containerMainCard--info__title">Good times now</p>
        <p className="containerMainCard--info__body">
          Every Thursday at 8:00pm
        </p>
        <button className="containerMainCard--info__button">Book Now</button>
      </div>
      <div className="containerMainCard--img">
        <img src={mr} />
      </div>
    </div>
  );
};
