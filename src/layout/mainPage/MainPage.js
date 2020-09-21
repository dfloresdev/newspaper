import React from "react";
import { Header } from "../../components/header/Header";
import { ScrollList } from "../../components/scrollList/ScrollList";
import { Menu } from "../../components/menu/Menu";
import { SecondaryCard } from "../../components/secondaryCard/SecondaryCard";
import { ThirdCard } from "../../components/thirdCard/ThirdCard";
import { AdCard } from "../../components/adCard/AdCard";
import { CentralCard } from "../../components/centralCard/CentralCard";
import { MainCard } from "../../components/rightPanel/mainCard/MainCard";
import { NewsCard } from "../../components/rightPanel/newsCard/NewsCard";
import { SubscribeCard } from "../../components/rightPanel/suscribeCard/SubscribeCard";
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
        <div>
          <AdCard />
        </div>
      </div>
      <div className="centerPanel">
        <CentralCard />
      </div>
      <div className="rightPanel">
        <MainCard />
        <div className="rightPanel--newsCards">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <SubscribeCard />
      </div>
    </div>
  );
};
