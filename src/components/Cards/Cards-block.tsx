import "./Cards-block.scss";
import Card from "./Card/Card";
import { useEffect, useState } from "react";
import { IArticle } from "../../types/Types";

const url = "https://api.spaceflightnewsapi.net/v3/articles";

const CardsBlock: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setArticles(results);
        setLoaded(true);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="cardsBlock">
      {loaded
        ? articles.map((article) => {
            return (
              <Card
                key={article.id}
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
