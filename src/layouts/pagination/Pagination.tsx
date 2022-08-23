import { useSearchParams } from "react-router-dom";
import Pages from "./Pages";
import "./Pagination.scss";

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) ?? 1;
  const currentPath = searchParams.get("path") ?? "articles";
  const handlePage = (currentPage: any, btn: string) => {
    setSearchParams(`?page=${currentPage + 1}`);
    btn === "next" && currentPage < 6
      ? setSearchParams(`?path=${currentPath}&page=${currentPage + 1}`)
      : btn === "prev" && currentPage > 1
      ? setSearchParams(`?path=${currentPath}&page=${currentPage - 1}`)
      : setSearchParams(`?path=${currentPath}&page=${currentPage}`);
  };

  return (
    <div className="pagination">
      <button
        className={
          currentPage > 1
            ? "pagination-button prev active"
            : "pagination-button prev"
        }
        onClick={() => handlePage(currentPage, "prev")}
      >
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.70994 0.292384C7.89994 0.492383 7.99994 0.742383 7.99994 1.00238C7.99994 1.26238 7.89994 1.51238 7.70994 1.71238L3.40994 6.00238L16.9999 6.00238C17.5499 6.00238 17.9999 6.45238 17.9999 7.00238C17.9999 7.55238 17.5499 8.00238 16.9999 8.00238L3.40994 8.00238L7.70994 12.2924C8.09994 12.6824 8.09994 13.3224 7.70994 13.7124C7.31994 14.1024 6.67994 14.1024 6.28994 13.7124L0.289942 7.71238C0.199942 7.62238 0.129942 7.51238 0.0799417 7.39238C0.0599417 7.34238 0.0399417 7.30238 0.0399417 7.25238C-0.0100583 7.09238 -0.0100583 6.91238 0.0399417 6.75238C0.0399417 6.70238 0.0599417 6.66238 0.0799417 6.61238C0.129942 6.49238 0.199942 6.38238 0.289942 6.29238L6.28994 0.292383C6.67994 -0.0976169 7.31994 -0.0976168 7.70994 0.292384Z"
          />
        </svg>
        Prev
      </button>
      <Pages count={6} current={currentPage} />
      <button
        className={
          currentPage < 6
            ? "pagination-button next active"
            : "pagination-button next"
        }
        onClick={() => handlePage(currentPage, "next")}
      >
        Next
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2901 14.7076C10.1001 14.5076 10.0001 14.2576 10.0001 13.9976C10.0001 13.7376 10.1001 13.4876 10.2901 13.2876L14.5901 8.99762L1.00006 8.99762C0.45006 8.99762 5.94579e-05 8.54762 5.94339e-05 7.99762C5.94099e-05 7.44762 0.45006 6.99762 1.00006 6.99762L14.5901 6.99762L10.2901 2.70762C9.90006 2.31762 9.90006 1.67762 10.2901 1.28762C10.6801 0.897618 11.3201 0.897617 11.7101 1.28762L17.7101 7.28762C17.8001 7.37762 17.8701 7.48762 17.9201 7.60762C17.9401 7.65762 17.9601 7.69762 17.9601 7.74762C18.0101 7.90762 18.0101 8.08762 17.9601 8.24762C17.9601 8.29762 17.9401 8.33762 17.9201 8.38762C17.8701 8.50762 17.8001 8.61762 17.7101 8.70762L11.7101 14.7076C11.3201 15.0976 10.6801 15.0976 10.2901 14.7076Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
