import "./Search.scss";
import icon from "../../assets/Icons/search.svg";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const current = searchParams.get("path");
    searchParams.set("search", inputText);
    setSearchParams(searchParams);
    navigate(`/search-result/?path=${current}&search=${inputText}`, {
      replace: true,
    });
  }

  useEffect(() => {
    const current = searchParams.get("search") || "";
    setInputText(current);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          className="search-input"
          placeholder="Search"
        />
        <button className="search-btn">
          <img className="search-icon" src={icon} alt="" />
        </button>
      </form>
    </>
  );
};

export default Search;
