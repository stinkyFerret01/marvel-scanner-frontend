import { Link } from "react-router-dom";

////////////////

const Header = () => {
  return (
    <header className="header-component">
      <nav className="header-nav">
        <Link className="home-link" to="/">
          <img src="./logo-marvel.png" alt="logo Marvel" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
