import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Pages.scss";

const Pages: React.FC<any> = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [styles, setStyles] = useState({
  //   active: 1,
  //   isNext: false,                           //Стейт для изменения стилей пагинации
  //   isPrev: false,
  // });

  const handleClickPage = (page: any) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const current = searchParams.get("page") ?? 1;

  // const changeStyles = (styles: {active: number, isNext: boolean, isPrev: boolean}, currentPage: number) => {
  //   currentPage == 1 ?
  //   setStyles({active: 1, isNext: true, isPrev: false})

  // }

  //Стейт для изменения стилей пагинации

  return (
    <ul className="pages">
      {Array.from({ length: count }).map((_, index) => (
        <li
          className="pages-items"
          key={index}
          onClick={() => handleClickPage(index + 1)}
          style={{
            color: Number(current) === index + 1 ? "#6C1BDB" : "#313037",
          }}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pages;
