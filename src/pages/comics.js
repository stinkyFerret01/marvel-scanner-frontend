import axios from "axios";
import { React, useState, useEffect } from "react";

const Comic = () => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComicsData = async () => {
      const response = await axios.get(
        "https://marvel-scanner-backend.herokuapp.com/comics"
      );
      setComicsData(response.data);
      setIsLoading(false);
    };
    fetchComicsData();
  }, [comicsData]);
  return !isLoading && <section>{comicsData.comics}</section>;
};

export default Comic;
