import "./CardsBlock.scss";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import { IArticle, ICardBlock } from "../../types/Types";
import { getArticleThunk } from "../../store/GetArticlesThunk";
import { useAppDispatch, useAppSelector } from "../../store/Index";
import { useSearchParams } from "react-router-dom";

const CardsBlock: React.FC<ICardBlock> = ({ limit }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const articles: IArticle[] = useAppSelector(
    (state) => state.articles.articles
  );

  const currentPage = searchParams.get("page") ?? 1;
  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? null;
  const selectPosts = searchParams.get("path") ?? "articles";

  useEffect(() => {
    dispatch(
      getArticleThunk(selectPosts, {
        limit: limit,
        page: currentPage,
        search,
        sort,
      })
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
                link={`/Card-content/${article.id}`}
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
