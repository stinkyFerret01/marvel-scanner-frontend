import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchform from "../components/search-form";
import Loadingscreen from "../components/loading-screen";

const Characters = () => {
  const [charsData, setCharsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharInput, setSearchCharInput] = useState("");
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // let response;
      // if (searchCharInput.length < 3) {
      const response = await axios.get(
        `https://marvel-scanner-backend.herokuapp.com/characters?name=${searchCharInput}&skip=${skip}`
      );
      // } else {
      //   response = await axios.get(
      //     `https://marvel-scanner-backend.herokuapp.com/characters?name=${searchCharInput}`
      //   );
      // }

      setCharsData(response);
      setIsLoading(false);
      // console.log("characters");
      // console.log("test", charsData);
    };
    fetchData();
  }, [searchCharInput, skip]);
  return { charsData } !== {} && !isLoading ? (
    <main className="characters-page">
      {console.log("test", charsData.data)}
      <Searchform
        charsData={charsData}
        searchCharInput={searchCharInput}
        setSearchCharInput={setSearchCharInput}
        skip={skip}
        setSkip={setSkip}
      />
      <div className="heroes-carroussel-hold">
        <div className="heroes-carroussel">
          {charsData.data.results.map((char, index) => {
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
  ) : (
    <Loadingscreen />
  );
};

export default Characters;
