import "./Cards-block.scss";
import Card from "./Card/Card";
import { useEffect, useState } from "react";
import { IArticle, ICardBlock } from "../../types/Types";
import { getArticleThunk } from "../../store/getArticlesThunk";
import { useAppDispatch, useAppSelector } from "../../store";
import { useSearchParams } from "react-router-dom";

const CardsBlock: React.FC<ICardBlock> = ({ limit }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const articles: IArticle[] = useAppSelector(
    (state) => state.articles.articles
  );

  const currentPage = searchParams.get("page") ?? 1;
  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? null;

  useEffect(() => {
    dispatch(
      getArticleThunk({ limit: limit, page: currentPage, search, sort })
    );
    setLoaded(true);
  }, [searchParams]);

  return (
    <div className="cardsBlock">
      {loaded
        ? articles.map((article) => {
            return (
              <Card
                key={article.id}
                link={`/CardContent/${article.id}`}
                img={article.imageUrl}
                title={article.title}
                date={article.publishedAt}
              />
            );
          })
        : "Loading..."}
    </div>
  );
};

export default CardsBlock;
