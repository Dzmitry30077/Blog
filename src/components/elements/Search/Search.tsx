import "./Search.scss";
import icon from "../../../assets/pics/search.svg";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

const Search: React.FC = () => {
  const [inputText, setInputText] = useState<any>("");
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  async function handleSubmit(event: any) {
    event.preventDefault();
    searchParams.set("search", inputText);
    setSearchParams(searchParams);
    await event.target;
    navigate(`/searchResult?search=${inputText}`, { replace: true });
  }

  useEffect(() => {
    const current = searchParams.get("search");
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
