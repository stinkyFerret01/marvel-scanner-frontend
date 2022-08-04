import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchform from "../components/search-form";

const Characters = () => {
  const [charsData, setCharsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharInput, setSearchCharInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // let response;
      // if (searchCharInput.length < 3) {
      const response = await axios.get(
        `https://marvel-scanner-backend.herokuapp.com/characters?name=${searchCharInput}`
      );
      // } else {
      //   response = await axios.get(
      //     `https://marvel-scanner-backend.herokuapp.com/characters?name=${searchCharInput}`
      //   );
      // }

      setCharsData(response);
      setIsLoading(false);
      console.log("characters");
    };
    fetchData();
  }, [searchCharInput]);
  return (
    !isLoading &&
    { charsData } !== {} && (
      <main className="characters-page">
        <Searchform
          searchCharInput={searchCharInput}
          setSearchCharInput={setSearchCharInput}
        />
        <div className="heroes-carroussel-hold">
          <div className="heroes-carroussel">
            {console.log("test", charsData)}
            {charsData.data.map((char, index) => {
              return (
                <article key={index} className="characters-card">
                  <Link to="/character" state={{ id: `${char._id}` }}>
                    <img
                      src={char.thumbnail.path + "." + char.thumbnail.extension}
                      alt={char.name}
                    />
                    <h2>{char.name}</h2>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    )
  );
};

export default Characters;
