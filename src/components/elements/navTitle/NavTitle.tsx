import { Link } from "react-router-dom";
import { INavTitle } from "../../../types/Types";
import "./NavTitle.scss";

const NavTitle: React.FC<INavTitle> = ({ id }) => {
  return (
    <div className="nav-title">
      <Link to={"/?page=1"} className="nav-title-link">
        Home
      </Link>
      <span className="nav-title-discription__span">/</span>
      <p className="nav-title-discription">{`Post ${id}`}</p>
    </div>
  );
};

export default NavTitle;
