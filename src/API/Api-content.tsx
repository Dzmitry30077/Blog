import { useEffect, useState } from "react";

const url = "https://api.spaceflightnewsapi.net/v3/articles";

const ApiContent = () => {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setArticles(results);
        setLoaded(true);
      })
      .catch(console.error);
  }, []);

  return <>{loaded ? JSON.stringify(articles) : "Не загрузило :c"}</>;
};

export default ApiContent;
