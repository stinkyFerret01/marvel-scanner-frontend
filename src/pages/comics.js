import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loadingscreen from "../components/loading-screen";

////////////////

const Comics = (url) => {
  console.log(url);
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
      <div className="comics-display">
        <div className="comics-carroussel">
          {comicsData.results.map((comic, index) => {
            return (
              <article key={index} className="comics-card">
                <Link
                  to="/comic"
                  state={{ comic: comic }}
                  className="text-link"
                >
                  <img
                    src={
                      comic.thumbnail.path + "." + comic.thumbnail.extension ===
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                        ? "./logo192.png"
                        : comic.thumbnail.path + "." + comic.thumbnail.extension
                    }
                    alt={comic.title}
                  />
                  <h3>{comic.title}</h3>
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
