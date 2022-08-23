import { Link } from "react-router-dom";
import { ICardProps } from "../../types/Types";
import "./Card.scss";

const Card: React.FC<ICardProps> = ({ img, link, date, title }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (dateProps: string, months: string[]) => {
    const cardDate = new Date(dateProps);
    const date = cardDate.getDate();
    const year = cardDate.getFullYear();
    const month = months.filter((_, index) => index === cardDate.getMonth());
    return `${month} ${date}, ${year} `;
  };

  const publishedAt = formatDate(date, months);

  return (
    <Link to={link}>
      <div className="card">
        <span className="card-img-container">
          <span className="card-gradient">
            <img src={img} alt="cosmos" className="card-img" />
          </span>
        </span>
        <span className="card-title">
          <p className="card-title-date">{publishedAt}</p>
          <p className="card-title-text">
            {title.length > 65 ? `${title.slice(0, 80)}...` : title}
          </p>
        </span>
      </div>
    </Link>
  );
};

export default Card;
