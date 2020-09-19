import React from "react";
import imgNew from "../../assets/margaret-hamilto.jpg";
import imgNewTwo from "../../assets/card.jpg";
import { TiArrowForward } from "react-icons/ti";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import "./styles.scss";

export const CentralCard = () => {
  return (
    <div className="containerCentralCard">
      <div className="containerCentralCard--image">
        <img width="100%" src={imgNew} />
      </div>
      <div className="containerCentralCard--trending">
        <div className="containerCentralCard--trending__title">
          <p>Trending</p>
        </div>
        <div className="containerCentralCard--trending__icon">
          <TiArrowForward className="icon" />
        </div>
      </div>
      <div className="containerCentralCard--title">
        <p>Brunetter, readheads picket does gentlemen prefer blondes</p>
      </div>
      <div className="containerCentralCard--body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis
          nisi luctus, imperdiet libero at, vestibulum urna. Vivamus vitae justo
          lorem. Phasellus eleifend erat sed odio commodo mattis. Duis sed
          placerat mauris, eget volutpat nibh.
        </p>
      </div>
      <div className="containerCentralCard--card">
        <div className="containerCentralCard--card__info">
          <div className="info--img">
            <img width="100%" src={imgNewTwo} />
          </div>
          <div className="info--text">
            <p className="info--text__title">Veronika Elizababeth</p>
            <p className="info--text__date">February 28, 1874</p>
          </div>
        </div>
        <div className="containerCentralCard--card__controls">
          <div className="box">
            <BiLeftArrow />
          </div>
          <div className="box">
            <BiRightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};
