import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [charsData, setCharsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-scanner-backend.herokuapp.com/characters"
      );
      setCharsData(response);
      setIsLoading(false);
    };
    fetchData();
  }, [charsData]);
  return (
    !isLoading && (
      <main className="homePage">
        <h1>---characters---</h1>
        <div className="App">
          {charsData.data.map((char, index) => {
            return (
              <section key={index} className="charactersList">
                <Link to="/character" state={{ id: `${char._id}` }}>
                  <p>{char.name}</p>
                  <img
                    src={char.thumbnail.path + "." + char.thumbnail.extension}
                    alt={char.name}
                  />
                </Link>
              </section>
            );
          })}
        </div>
      </main>
    )
  );
};

export default Characters;
