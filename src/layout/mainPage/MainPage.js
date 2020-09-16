import React from "react";
import { Header } from "../../components/header/Header";
import { ScrollList } from "../../components/scrollList/ScrollList";
import { Menu } from "../../components/menu/Menu";
import { SecondaryCard } from "../../components/secondaryCard/SecondaryCard";
import { ThirdCard } from "../../components/thirdCard/ThirdCard";
import "./styles.scss";

export const MainPage = () => {
  return (
    <div className="containerMainPage">
      <div className="header">
        <Header />
      </div>
      <div className="scrollList">
        <ScrollList />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="leftPanel">
        <div>
          <SecondaryCard />
        </div>
        <div>
          <ThirdCard />
        </div>
        <div>ads</div>
      </div>
      <div className="centerPanel">
        <p>center panel</p>
      </div>
      <div className="rightPanel">
        <p>right panel</p>
      </div>
    </div>
  );
};
