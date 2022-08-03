import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-component">
      <nav className="header-nav">
        <Link className="home-link" to="/">
          <h3>link to HOME!!</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
