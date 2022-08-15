import { Link } from "react-router-dom";
import "./Nav-title.scss";

const NavTitle: React.FC<any> = ({ id }) => {
  return (
    <div className="nav-title">
      <Link to={"/"} className="nav-title-link">
        Home
      </Link>
      <span className="nav-title-discription__span">/</span>
      <p className="nav-title-discription">{`Post ${id}`}</p>
    </div>
  );
};

export default NavTitle;
