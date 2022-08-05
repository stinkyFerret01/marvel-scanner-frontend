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
      <article className="character-card hero-display">
        <div className="characters-card">
          <h2>{char.char.name}</h2>
          <img
            src={char.char.thumbnail.path + "." + char.char.thumbnail.extension}
            alt={char.char.name}
          />
        </div>
        <div>
          <h3>Apparitons</h3>
          <div className="comic-list">
            {charcomics.comics.map((charComic, index) => {
              return (
                <article key={index}>
                  <p>{charComic.title}</p>
                </article>
              );
            })}
          </div>
        </div>
      </article>
    </main>
  ) : (
    <Loadingscreen />
  );
};

export default Character;
