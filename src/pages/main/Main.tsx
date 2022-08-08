import { useEffect, useState } from "react";
import CardsBlock from "../../components/Cards/Cards-block";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Wrapper>
        <Menu />
        <CardsBlock />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Main;
