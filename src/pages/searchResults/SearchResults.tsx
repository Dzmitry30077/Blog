import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardsBlock from "../../components/cardsBlock/CardsBlock";
import PageTitle from "../../components/elements/pageTitle/PageTitle";
import Wrapper from "../../components/wrapper/Wrapper";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import "./SearchResults.scss";

const SearchResults: React.FC = () => {
  const [searchState, setSearchState] = useState({
    search: "result",
  });
  const [searchParams] = useSearchParams();

  const current: any = searchParams.get("search");

  useEffect(() => {
    setSearchState({ search: current });
  }, [current]);

  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle text={`Search results '${searchState.search}'`} />
        <CardsBlock limit={21} />
        <Footer />
      </Wrapper>
    </>
  );
};

export default SearchResults;
