import React from "react";
import { Header } from "../components/header/Header";
import { ScrollList } from "../components/scrollList/ScrollList";
import { Menu } from "../components/menu/Menu";

export const MainPage = () => {
  return (
    <>
      <Header />
      <ScrollList />
      <Menu />
    </>
  );
};
