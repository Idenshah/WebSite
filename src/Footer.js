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
        <Link to="mailto:Shah0373@algonquinlive.com">
          <img src="/image/email.png" alt="email" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
