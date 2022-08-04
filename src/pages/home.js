import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      <nav className="home-nav">
        <Link to="/characters">
          <div className="display-characters">
            <img src="./logo-marvel-heroes.jpeg" />
          </div>
        </Link>

        <Link to="/comics">
          <div className="display-comics">
            <img src="./logo-marvel-comics.png" />
          </div>
        </Link>
      </nav>
    </main>
  );
};
export default Home;
