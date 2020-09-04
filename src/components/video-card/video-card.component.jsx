import React, { forwardRef, useState } from "react";

import TextTruncate from "react-text-truncate";

import { ThumbUpSharp } from "@material-ui/icons";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import "./video-card.style.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handlePlayClick = async () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCDc0rnqwckHnvss3duRR6GewaafBQFCr4&q=${
        movie.title || movie.original_name
      } trailer`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("YT: ", data);

        setVideoUrl(
          `https://www.youtube.com/embed/${data.items[0].id.videoId}`
        );
      });
  };

  return (
    <div ref={ref} className={`videoCard ${!videoUrl && "videoCard-hover"}`}>
      {videoUrl ? (
        <iframe src={videoUrl} title="Movie Trailer"></iframe>
      ) : (
        <img
          src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
          alt="Movie Card"
        />
      )}
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && movie.media_type}
        &nbsp;&nbsp;&nbsp;
        {movie.release_date || movie.first_air_date}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ThumbUpSharp /> &nbsp; {movie.vote_count}
      </p>

      {videoUrl ? null : (
        <div className="videoCard__playButton">
          <button onClick={handlePlayClick}>
            <PlayCircleOutlineIcon />
          </button>
        </div>
      )}
    </div>
  );
});

export default VideoCard;
