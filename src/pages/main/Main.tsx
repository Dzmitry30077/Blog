import CardsBlock from "../../components/Cards/Cards-block";
import Menu from "../../components/Menu/Menu";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Pagination from "../../layouts/Pagination/Pagination";
import "./Main.scss";

const Main: React.FC = () => {
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
