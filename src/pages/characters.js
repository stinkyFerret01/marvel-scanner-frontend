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
  // const [limit, setLimit] = useState("100");

  useEffect(() => {
    const fetchData = async () => {
      // let response;
      // if (searchCharInput.length < 3) {
      const response = await axios.get(
        `https://marvel-scanner-backend.herokuapp.com/characters?name=${searchCharInput}&skip=${skip}&limit=100`
      );
      // } else {
      //   response = await axios.get(
      //     `https://marvel-scanner-backend.herokuapp.com/characters?name=${searchCharInput}`
      //   );
      // }

      setCharsData(response);
      setIsLoading(false);
    };
    fetchData();
  }, [searchCharInput, skip]);

  return { charsData } !== {} && !isLoading ? (
    <main className="characters-page">
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
        {/* <div> */}
        <p>
          page {skip / 100 + 1}/{Math.ceil(charsData.data.count / 100)}
        </p>

        {/* <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label>
              heroes per pages
              <select
                value={limit}
                onChange={(event) => {
                  setLimit(event.target.value);
                }}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div> */}
      </div>
    </main>
  ) : (
    <Loadingscreen />
  );
};

export default Characters;
