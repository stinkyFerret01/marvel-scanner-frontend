import axios from "axios";
import { useLocation } from "react-router-dom";
import { React, useState, useEffect } from "react";

const Character = () => {
  const location = useLocation();
  const { id } = location.state;

  const [chardata, setChardata] = useState({});
  const [charcomics, setCharcomics] = useState({});
  const [isLoading2, setIsLoading2] = useState(true);
  useEffect(() => {
    const fetchCharData = async () => {
      const response = await axios.get(
        `https://marvel-scanner-backend.herokuapp.com/character?id=${id}`
      );
      setChardata(response.data);
    };
    const fetchComicData = async () => {
      const response = await axios.get(
        `https://marvel-scanner-backend.herokuapp.com/charcomics?id=${id}`
      );
      setCharcomics(response.data);
      setIsLoading2(false);
    };
    fetchCharData();
    fetchComicData();
    console.log("character");
  }, [id]);
  return (
    !isLoading2 &&
    { chardata } !== {} && { charcomics } && (
      <main>
        <section className="charactersList">
          <h2>{chardata.name}</h2>
          <img
            src={chardata.thumbnail.path + "." + chardata.thumbnail.extension}
            alt={chardata.name}
          />
          {charcomics.comics.map((charComic, index) => {
            return <article key={index}>{charComic.title}</article>;
          })}
        </section>
      </main>
    )
  );
};

export default Character;
