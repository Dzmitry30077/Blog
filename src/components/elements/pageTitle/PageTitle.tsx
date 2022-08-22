import { IPageTitle } from "../../../types/Types";
import "./PageTitle.scss";

const PageTitle: React.FC<IPageTitle> = ({ text }) => {
  return <div className="page-title">{text}</div>;
};

export default PageTitle;
