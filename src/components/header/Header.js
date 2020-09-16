import React from "react";
import deweys from "../../assets/deweys.png";
import logoNews from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import "./styles.scss";

export const Header = () => {
  return (
    <div className="containerHeader">
      <div className="containerHeader--left">
        <img src={deweys} />
      </div>
      <div className="containerHeader--center">
        <img src={logoNews} />
      </div>
      <div className="containerHeader--right">
        <img src={phone} />
      </div>
    </div>
  );
};
