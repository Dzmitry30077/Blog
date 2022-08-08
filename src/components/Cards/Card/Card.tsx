import { ICardProps } from "../../../types/Types";
import "./Card.scss";

const Card: React.FC<ICardProps> = ({ img, date, title }) => {
  return (
    <div className="card">
      <span className="card-img-container">
        <span className="card-gradient">
          <img src={img} alt="cosmos" className="card-img" />
        </span>
      </span>
      <span className="card-title">
        <p className="card-title-date">{date?.slice(0, 10)}</p>
        <p className="card-title-text">{title}</p>
      </span>
    </div>
  );
};

export default Card;
