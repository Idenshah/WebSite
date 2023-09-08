import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <Link to="https://www.linkedin.com/in/iden-shahsavar">
          <img src="/image/linkedin.png" alt="linkedin" />
        </Link>
        <Link to="https://www.github.com/Idenshah">
          <img src="/image/github.png" alt="github" />
        </Link>
      </div>
      <div className="rightFooter">
        <div>
          <span className="email">Email:</span>
          <a href="mailto:Shah0373@algonquinlive.com">
            Shah0373@algonquinlive.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
