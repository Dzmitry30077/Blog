import Switch from "../../components/elements/switch/Switch";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer-title">©2022 Blogolog</p>
      <span className="footer-theme">
        <p className="footer-theme-discription">Dark theme</p>
        <Switch />
      </span>
    </div>
  );
};

export default Footer;
