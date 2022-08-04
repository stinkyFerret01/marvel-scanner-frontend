import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Comics = () => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading3, setIsLoading3] = useState(true);

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
  return (
    !isLoading3 &&
    { comicsData } !== {} && (
      <section className="comics-page">
        <div className="comics-carroussel-hold">
          <div className="comics-carroussel">
            {comicsData.results.map((comic, index) => {
              return (
                <article key={index} className="comics-card">
                  <Link to="/comic" state={{ comic: comic }}>
                    <h2>{comic.title}</h2>
                    <img
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      alt={comic.title}
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    )
  );
};

export default Comics;
