import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../elements/pageTitle/PageTitle";
import MenuFilter from "../menuFilter/MenuFilter";
import "./Menu.scss";

const Menu: React.FC = () => {
  const [postState, setPostState] = useState({ active: "articles" });
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: any) => {
    const attribute = e.target.dataset["id"];
    setSearchParams(`path=${attribute}&page=1`);
    setPostState({ active: attribute });
  };

  const current = searchParams.get("path") || "";

  useEffect(() => {
    setPostState({ active: current });
  }, [current]);

  return (
    <div className="menu">
      <PageTitle text={"Blog"} />
      <div className="menu-tabs">
        <button
          onClick={handleClick}
          data-id={"articles"}
          className={
            postState.active === "articles"
              ? "menu-tabs-button active"
              : "menu-tabs-button"
          }
        >
          Articles
        </button>
        <button
          onClick={handleClick}
          data-id={"blogs"}
          className={
            postState.active === "blogs"
              ? "menu-tabs-button active"
              : "menu-tabs-button"
          }
        >
          News
        </button>
      </div>
      <MenuFilter />
    </div>
  );
};

export default Menu;
