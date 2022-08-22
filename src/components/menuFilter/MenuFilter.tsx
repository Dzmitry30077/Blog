import "./MenuFilter.scss";

const MenuFilter: React.FC = () => {
  return (
    <div className="menu-filter">
      <div className="menu-filter-buttons">
        <button className="menu-filter-button primary">Day</button>
        <button className="menu-filter-button">Week</button>
        <button className="menu-filter-button">Month</button>
        <button className="menu-filter-button">Year</button>
      </div>
      <select name="menu-filter-select">
        <option>Title (A-Z)</option>
        <option>Title (Z-A)</option>
      </select>
    </div>
  );
};

export default MenuFilter;
