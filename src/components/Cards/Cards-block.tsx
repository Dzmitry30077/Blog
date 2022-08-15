import "./Cards-block.scss";
import Card from "./Card/Card";
import { useEffect, useState } from "react";
import { IArticle, ICardBlock } from "../../types/Types";
import { getArticles } from "../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { getArticleThunk } from "../../store/getArticlesThunk";
import { useAppDispatch, useAppSelector } from "../../store";

const url = "https://api.spaceflightnewsapi.net/v3/articles";

const CardsBlock: React.FC<ICardBlock> = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getArticleThunk());
    setLoaded(true);
  }, []);

  console.log(articles);

  return <div className="cardsBlock">{loaded ? "Hello" : "Loading..."}</div>;
};

export default CardsBlock;
