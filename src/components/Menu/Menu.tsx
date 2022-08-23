import PageTitle from "../elements/Page-title/Page-title";
import MenuFilter from "../Menu-filter/Menu-filter";
import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <PageTitle text={"Blog"} />
      <div className="menu-tabs">
        <button className="menu-tabs-button active">Articles</button>
        <button className="menu-tabs-button">News</button>
      </div>
      <MenuFilter />
    </div>
  );
};

export default Menu;
