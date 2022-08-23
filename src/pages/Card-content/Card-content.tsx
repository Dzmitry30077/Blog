import CardsBlock from "../../components/Cards/Cards-block";
import NavTitle from "../../components/elements/Nav-title/Nav-title";
import PageTitle from "../../components/elements/Page-title/Page-title";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "./Card-content.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const url = "https://api.spaceflightnewsapi.net/v3/articles";

const CardContent: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>({});

  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setArticle(result);
      })
      .catch(console.error);
  }, [id]);

  return (
    <>
      <Header />
      <Wrapper>
        <NavTitle id={id} />
        <PageTitle text={article.title} />
        <div className="card-content">
          <span className="card-content-container">
            <span className="card-content-gradient">
              <img
                src={article.imageUrl}
                alt="cosmos"
                className="card-content-img"
              />
            </span>
          </span>
          <div className="card-content-text">{article.summary}</div>
          <div className="card-content-share">
            <a
              href="https://www.facebook.com/"
              className="card-content-share-link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.twitter.com/"
              className="card-content-share-link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 2C22.0424 2.67548 20.9821 3.19211 19.86 3.53C19.2577 2.83751 18.4573 2.34669 17.567 2.12393C16.6767 1.90116 15.7395 1.9572 14.8821 2.28445C14.0247 2.61171 13.2884 3.1944 12.773 3.95372C12.2575 4.71303 11.9877 5.61234 12 6.53V7.53C10.2426 7.57557 8.50127 7.18581 6.93101 6.39545C5.36074 5.60508 4.01032 4.43864 3 3C3 3 -1 12 8 16C5.94053 17.398 3.48716 18.0989 1 18C10 23 21 18 21 6.5C20.9991 6.22145 20.9723 5.94359 20.92 5.67C21.9406 4.66349 22.6608 3.39271 23 2V2Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <button className="card-content-share-link__button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <CardsBlock limit={3} />
        <Footer />
      </Wrapper>
    </>
  );
};

export default CardContent;
