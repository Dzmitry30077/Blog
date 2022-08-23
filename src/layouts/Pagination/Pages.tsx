import { useSearchParams } from "react-router-dom";
import { iPages } from "../../types/Types";
import "./Pages.scss";

const Pages: React.FC<iPages> = ({ count, current }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClickPage = (page: any) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

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
