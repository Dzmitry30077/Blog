import { Link } from "react-router-dom";
import { ICardProps } from "../../../types/Types";
import "./Card.scss";

const Card: React.FC<ICardProps> = ({ img, link, date, title }) => {
  return (
    <Link to={link}>
      <div className="card">
        <span className="card-img-container">
          <span className="card-gradient">
            <img src={img} alt="cosmos" className="card-img" />
          </span>
        </span>
        <span className="card-title">
          <p className="card-title-date">{date?.slice(0, 10)}</p>
          <p className="card-title-text">
            {title.length > 65 ? `${title.slice(0, 80)}...` : title}
          </p>
        </span>
      </div>
    </Link>
  );
};

export default Card;
