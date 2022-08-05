import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchform from "../components/search-form";
import Loadingscreen from "../components/loading-screen";

////////////////

const Characters = () => {
  const [charsData, setCharsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharInput, setSearchCharInput] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit] = useState(100);

  ////////////////

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-scanner-backend.herokuapp.com/characters?name=${searchCharInput}&skip=${skip}&limit=100`
      );
      setCharsData(response);
      setIsLoading(false);
    };
    fetchData();
  }, [searchCharInput, skip]);

  ////////////////

  return { charsData } !== {} && !isLoading ? (
    <main className="characters-page">
      <Searchform
        charsData={charsData}
        searchCharInput={searchCharInput}
        setSearchCharInput={setSearchCharInput}
        skip={skip}
        setSkip={setSkip}
      />
      <div className="heroes-display">
        <div className="heroes-carroussel">
          {charsData.data.results.map((char, index) => {
            return (
              <article key={index} className="characters-card">
                <Link to="/character" state={{ char: { char } }}>
                  <img
                    src={char.thumbnail.path + "." + char.thumbnail.extension}
                    alt={char.name}
                  />
                  <h2>{char.name.slice(0, 13)}</h2>
                </Link>
              </article>
            );
          })}
        </div>
        <h4>
          page {skip / limit + 1}/{Math.ceil(charsData.data.count / limit)}
        </h4>
        {/* <label>
          heroes per pages
          <select
            value={limit}
            onChange={(event) => {
              const select = Number(event.target.value);
              setLimit(select);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label> */}
      </div>
    </main>
  ) : (
    <Loadingscreen />
  );
};

export default Characters;
