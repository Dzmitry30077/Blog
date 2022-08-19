import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardsBlock from "../../components/Cards/Cards-block";
import PageTitle from "../../components/elements/Page-title/Page-title";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "./Search-results.scss";

const SearchResults: React.FC = () => {
  const [searchState, setSearchState] = useState({
    search: "result",
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const current: any = searchParams.get("search");
    setSearchState({ search: current });
  }, []);

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
