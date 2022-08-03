import "./App.css";
import axios from "axios";
import { React, useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-scanner-backend.herokuapp.com/characters"
      );
      setData(response);
      setIsLoading(false);
      console.log(response.data[0].thumbnail.path);
      console.log(response.data[0].name);
    };
    console.log();
    fetchData();
  }, []);

  return (
    !isLoading && (
      <div className="App">
        <p>{data.data[0].name}</p>
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" />
      </div>
    )
  );
}

export default App;
