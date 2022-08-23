import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardsBlock from "../../components/cardsBlock/CardsBlock";
import Menu from "../../components/menu/Menu";
import Wrapper from "../../components/wrapper/Wrapper";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import Pagination from "../../layouts/pagination/Pagination";
import "./Main.scss";

const Main: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams(`?path=articles&page=1`);
  }, []);

  return (
    <div className="main">
      <Header />
      <Wrapper>
        <Menu />
        <CardsBlock limit={12} />
        <Pagination />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Main;
