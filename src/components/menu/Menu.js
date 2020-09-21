import React from "react";
import "./styles.scss";
import { FiSearch } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";

export const Menu = () => {
  return (
    <>
      <div className="containerMenu">
        <BiMenuAltLeft className="styleIcon" />
        <p>LATEST</p>
        <p>FEATURED</p>
        <p>AUTOMOBILES</p>
        <p>CELEBRETIES</p>
        <p>HOLLIWOOD DIRECTORY</p>
        <p>TRENDING MOVIES</p>
        <p>BOOK TICKET</p>
        <p>FANS</p>
        <p>BOOKS</p>
        <FiSearch className="styleIcon" />
      </div>
      <div className="containerMenuResponsive">
        <BiMenuAltLeft className="styleIcon" />
        <FiSearch className="styleIcon" />
      </div>
    </>
  );
};
