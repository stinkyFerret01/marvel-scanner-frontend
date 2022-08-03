import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      <h1>---home---</h1>
      <div>
        <Link to="/characters">link to CHARACTERS!!</Link>
        <Link to="/comics">link to COMICS!!</Link>
      </div>
    </main>
  );
};
export default Home;
