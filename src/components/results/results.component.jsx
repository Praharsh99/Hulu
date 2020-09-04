import React, { useState, useEffect } from "react";
import axios from "../../tmdb/axios.js";
import FlipMove from "react-flip-move";

import VideoCard from "../video-card/video-card.component";

import "./results.style.css";

function Results({ selectedOption, searchQuery }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let request;

      if (selectedOption.type === "search")
        request = await axios.get(selectedOption.url + `&query=${searchQuery}`);
      else request = await axios.get(selectedOption);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption, searchQuery]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
