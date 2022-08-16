import CardsBlock from "../../components/Cards/Cards-block";
import PageTitle from "../../components/elements/Page-title/Page-title";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "./Search-results.scss";

const SearchResults: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle text={`Search results ${"title"}`} />
        <CardsBlock limit={2} />
        <Footer />
      </Wrapper>
    </>
  );
};

export default SearchResults;
