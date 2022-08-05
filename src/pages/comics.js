import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loadingscreen from "../components/loading-screen";

////////////////

const Comics = () => {
  ////
  const [comicsData, setComicsData] = useState({});
  const [isLoading3, setIsLoading3] = useState(true);

  ////////////////

  useEffect(() => {
    const fetchComicsData = async () => {
      const response = await axios.get(
        "https://marvel-scanner-backend.herokuapp.com/comics"
      );
      setComicsData(response.data);
      setIsLoading3(false);
      console.log("comics");
    };
    fetchComicsData();
  }, []);

  ////////////////

  return !isLoading3 && { comicsData } !== {} ? (
    <section className="comics-page">
      <div className="comics-carroussel-hold">
        <div className="comics-carroussel">
          {comicsData.results.map((comic, index) => {
            return (
              <article key={index} className="comics-card">
                <Link to="/comic" state={{ comic: comic }}>
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt={comic.title}
                  />
                  <h2>{comic.title}</h2>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  ) : (
    <Loadingscreen />
  );
};

export default Comics;
