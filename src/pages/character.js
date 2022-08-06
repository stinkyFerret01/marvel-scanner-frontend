import axios from "axios";
import { useLocation } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Loadingscreen from "../components/loading-screen";

////////////////

const Character = () => {
  ////
  const location = useLocation();
  const { char } = location.state;
  console.log(char.char.name);

  ////
  const [charcomics, setCharcomics] = useState({});
  const [isLoading2, setIsLoading2] = useState(true);

  ////////////////

  useEffect(() => {
    const fetchComicData = async () => {
      const response = await axios.get(
        `https://marvel-scanner-backend.herokuapp.com/charcomics?id=${char.char._id}`
      );
      setCharcomics(response.data);
      setIsLoading2(false);
    };
    fetchComicData();
    console.log("character");
  }, [char.char._id]);

  ////////////////

  return !isLoading2 && { charcomics } !== {} ? (
    <main className="characters-page">
      <section className="hero-display">
        <article className="characters-card">
          <img
            src={char.char.thumbnail.path + "." + char.char.thumbnail.extension}
            alt={char.char.name}
          />
          <h2>{char.char.name}</h2>
        </article>
        <div>
          <div className="description">
            <h3>DESCRIPTION</h3>
            <h4>{char.char.description}</h4>
          </div>
          <div className="apparition">
            <h3>APPARITION</h3>
            <div className="comic-list">
              {charcomics.comics.map((charComic, index) => {
                return charcomics.comics.length > 0 ? (
                  <article key={index} className="comic-card">
                    <p>{charComic.title}</p>
                    <img
                      src={
                        charComic.thumbnail.path +
                        "." +
                        char.char.thumbnail.extension
                      }
                      alt={char.char.name}
                    />
                  </article>
                ) : (
                  <p>INFORMATIONS NON RENSEIGNEES</p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  ) : (
    <Loadingscreen />
  );
};

export default Character;
